---
schema: wang-person/v1
id: p_BJWKFeyMkd6CWsh7JeiHFm
status: active
merged_into: null
display_name: 王冠三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hoebzbsvb8GLAbxYitUi2D
        subject_person_id: p_BJWKFeyMkd6CWsh7JeiHFm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冠三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XFUcopAd1g7enHBU48b3Ap
          claim_id: c_hoebzbsvb8GLAbxYitUi2D
          source_id: s_Qv5ZuZ41H6sJWAotH75Df4
          stance: supports
          locator: CBDB:636350
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636350）
          source: &a1
            id: s_Qv5ZuZ41H6sJWAotH75Df4
            source_type: api_record
            title: 中国历代人物传记资料库：王冠三（CBDB 636350）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636350&o=json
            external_identifier: CBDB:636350
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.962Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j6v5jchRinjAJLbiwDgjn3
        subject_person_id: p_BJWKFeyMkd6CWsh7JeiHFm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冠三，清人物。籍贯清豐，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 636350）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RshKQcbvDQAJ16A45oSO_6
          claim_id: c_j6v5jchRinjAJLbiwDgjn3
          source_id: s_Qv5ZuZ41H6sJWAotH75Df4
          stance: supports
          locator: CBDB:636350
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

# 王冠三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冠三 | accepted |
| bio.summary | 王冠三，清人物。籍贯清豐，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 636350） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冠三（CBDB 636350）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636350&o=json)
