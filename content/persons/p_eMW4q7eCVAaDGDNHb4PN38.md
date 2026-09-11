---
schema: wang-person/v1
id: p_eMW4q7eCVAaDGDNHb4PN38
status: active
merged_into: null
display_name: 王恆德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C8wfkWdtCzpASzUBJL1yeV
        subject_person_id: p_eMW4q7eCVAaDGDNHb4PN38
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ErtwCdgQyjqkBwH4WhCbnU
          claim_id: c_C8wfkWdtCzpASzUBJL1yeV
          source_id: s_bNJDafzMW1YpGxU6SyDsaZ
          stance: supports
          locator: CBDB:637822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637822）
          source: &a1
            id: s_bNJDafzMW1YpGxU6SyDsaZ
            source_type: api_record
            title: 中国历代人物传记资料库：王恆德（CBDB 637822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637822&o=json
            external_identifier: CBDB:637822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kxA7fnRUKf8EMTHXv3Ut3i
        subject_person_id: p_eMW4q7eCVAaDGDNHb4PN38
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆德，清人物。籍贯文水，曾任經歷、知縣、州判。（中国历代人物传记资料库 CBDB 637822）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FQNqEz6BJWiBWMXGEV9Kr1
          claim_id: c_kxA7fnRUKf8EMTHXv3Ut3i
          source_id: s_bNJDafzMW1YpGxU6SyDsaZ
          stance: supports
          locator: CBDB:637822
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

# 王恆德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆德 | accepted |
| bio.summary | 王恆德，清人物。籍贯文水，曾任經歷、知縣、州判。（中国历代人物传记资料库 CBDB 637822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恆德（CBDB 637822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637822&o=json)
