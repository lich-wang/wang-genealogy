---
schema: wang-person/v1
id: p_563TyZD6DKJ6vGEn1LeKqj
status: active
merged_into: null
display_name: 王為相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aeMnW4u1iiyYBA7kuxYjcr
        subject_person_id: p_563TyZD6DKJ6vGEn1LeKqj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王為相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gwg6yAPaCKBcY2QnpseWbD
          claim_id: c_aeMnW4u1iiyYBA7kuxYjcr
          source_id: s_ENZrkHw4GJoZJe5oPky763
          stance: supports
          locator: CBDB:342705
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342705）
          source: &a1
            id: s_ENZrkHw4GJoZJe5oPky763
            source_type: api_record
            title: 中国历代人物传记资料库：王為相（CBDB 342705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342705&o=json
            external_identifier: CBDB:342705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.029Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CeLtxMe9G1TGQFHGLY9WGk
        subject_person_id: p_563TyZD6DKJ6vGEn1LeKqj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王為相，清人物。明清進士進士，籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 342705）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_h9msC3CaQ5CHui7UEdgt_1
          claim_id: c_CeLtxMe9G1TGQFHGLY9WGk
          source_id: s_ENZrkHw4GJoZJe5oPky763
          stance: supports
          locator: CBDB:342705
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

# 王為相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王為相 | accepted |
| bio.summary | 王為相，清人物。明清進士進士，籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 342705） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王為相（CBDB 342705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342705&o=json)
