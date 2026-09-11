---
schema: wang-person/v1
id: p_uksMmYbeMQHQPv6ALEsQh8
status: active
merged_into: null
display_name: 王宣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ji4MwtsiP4MuNYKpqdBaoW
        subject_person_id: p_uksMmYbeMQHQPv6ALEsQh8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CDnUSJAdBAxQAB2dptP72e
          claim_id: c_Ji4MwtsiP4MuNYKpqdBaoW
          source_id: s_EUycGF3pwsM7CkHKyGz56k
          stance: supports
          locator: CBDB:342476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342476）
          source: &a1
            id: s_EUycGF3pwsM7CkHKyGz56k
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 342476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342476&o=json
            external_identifier: CBDB:342476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.946Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SKtTBAyEKMYvQWuh5KpwsB
        subject_person_id: p_uksMmYbeMQHQPv6ALEsQh8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣，明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 342476）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vdvy65D9ilqOcEGZt6OCN9
          claim_id: c_SKtTBAyEKMYvQWuh5KpwsB
          source_id: s_EUycGF3pwsM7CkHKyGz56k
          stance: supports
          locator: CBDB:342476
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | 王宣，明人物。明清進士進士，籍贯臨海，入仕進士。（中国历代人物传记资料库 CBDB 342476） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 342476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342476&o=json)
