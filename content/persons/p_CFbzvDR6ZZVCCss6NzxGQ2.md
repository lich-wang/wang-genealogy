---
schema: wang-person/v1
id: p_CFbzvDR6ZZVCCss6NzxGQ2
status: active
merged_into: null
display_name: 王士剛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jryNnkaZLq4EjThQw9Wh9W
        subject_person_id: p_CFbzvDR6ZZVCCss6NzxGQ2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士剛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WcRUJe3fsdAu7iTSCyoSZZ
          claim_id: c_jryNnkaZLq4EjThQw9Wh9W
          source_id: s_NrpPmeJT1c1ZjqFMRRrNZP
          stance: supports
          locator: CBDB:636793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636793）
          source: &a1
            id: s_NrpPmeJT1c1ZjqFMRRrNZP
            source_type: api_record
            title: 中国历代人物传记资料库：王士剛（CBDB 636793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636793&o=json
            external_identifier: CBDB:636793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j9ZjMMh8rVACWQYNAP6D82
        subject_person_id: p_CFbzvDR6ZZVCCss6NzxGQ2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王士剛，清人物。籍贯大同，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 636793）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3-YJpbuFaG2JGb3aZWF5Co
          claim_id: c_j9ZjMMh8rVACWQYNAP6D82
          source_id: s_NrpPmeJT1c1ZjqFMRRrNZP
          stance: supports
          locator: CBDB:636793
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

# 王士剛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士剛 | accepted |
| bio.summary | 王士剛，清人物。籍贯大同，入仕貢生: 拔貢，曾任訓導。（中国历代人物传记资料库 CBDB 636793） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士剛（CBDB 636793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636793&o=json)
