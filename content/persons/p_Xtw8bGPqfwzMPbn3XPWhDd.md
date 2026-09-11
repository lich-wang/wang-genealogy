---
schema: wang-person/v1
id: p_Xtw8bGPqfwzMPbn3XPWhDd
status: active
merged_into: null
display_name: 王凝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_emYBuQqCYbJbSNzkeFPxGC
        subject_person_id: p_Xtw8bGPqfwzMPbn3XPWhDd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cEYJze8DMecPMT74zrA9Hn
          claim_id: c_emYBuQqCYbJbSNzkeFPxGC
          source_id: s_K8V5C3y9AaLnk4fS17wTmq
          stance: supports
          locator: CBDB:37829
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37829）
          source: &a1
            id: s_K8V5C3y9AaLnk4fS17wTmq
            source_type: api_record
            title: 中国历代人物传记资料库：王凝（CBDB 37829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37829&o=json
            external_identifier: CBDB:37829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.264Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sixCwXynHA64jLJ8AFv8rz
        subject_person_id: p_Xtw8bGPqfwzMPbn3XPWhDd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凝，宋人物。身份为畫家，曾任翰林圖畫院待詔。（中国历代人物传记资料库 CBDB 37829）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_puMvjHPkphcMTvI1XX5Pt8
          claim_id: c_sixCwXynHA64jLJ8AFv8rz
          source_id: s_K8V5C3y9AaLnk4fS17wTmq
          stance: supports
          locator: CBDB:37829
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

# 王凝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王凝 | accepted |
| bio.summary | 王凝，宋人物。身份为畫家，曾任翰林圖畫院待詔。（中国历代人物传记资料库 CBDB 37829） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王凝（CBDB 37829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37829&o=json)
