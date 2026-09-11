---
schema: wang-person/v1
id: p_KA2ZpCET1a9qWPEoD1TxH7
status: active
merged_into: null
display_name: 王啟鏕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v6bFJdjseqp3QqaViWW94a
        subject_person_id: p_KA2ZpCET1a9qWPEoD1TxH7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟鏕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VzdeuUMsr2AWGdPtpjBggP
          claim_id: c_v6bFJdjseqp3QqaViWW94a
          source_id: s_M8dp8QHkHwuU3m2KCKMUFa
          stance: supports
          locator: CBDB:636566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636566）
          source: &a1
            id: s_M8dp8QHkHwuU3m2KCKMUFa
            source_type: api_record
            title: 中国历代人物传记资料库：王啟鏕（CBDB 636566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636566&o=json
            external_identifier: CBDB:636566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.032Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c84SVjNF6quWGsdfEuxd6r
        subject_person_id: p_KA2ZpCET1a9qWPEoD1TxH7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟鏕，清人物。籍贯寧波府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636566）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UDCL6pO3EAw6cTUuRuq0Dn
          claim_id: c_c84SVjNF6quWGsdfEuxd6r
          source_id: s_M8dp8QHkHwuU3m2KCKMUFa
          stance: supports
          locator: CBDB:636566
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

# 王啟鏕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟鏕 | accepted |
| bio.summary | 王啟鏕，清人物。籍贯寧波府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 636566） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟鏕（CBDB 636566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636566&o=json)
