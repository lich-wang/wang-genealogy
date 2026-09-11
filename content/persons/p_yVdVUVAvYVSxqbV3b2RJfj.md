---
schema: wang-person/v1
id: p_yVdVUVAvYVSxqbV3b2RJfj
status: active
merged_into: null
display_name: 王丕行
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GrCv7rpDCKpAoR8hMtRC9f
        subject_person_id: p_yVdVUVAvYVSxqbV3b2RJfj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3Sv47zD75JtkQ8Wr24CaQd
          claim_id: c_GrCv7rpDCKpAoR8hMtRC9f
          source_id: s_UtpaXZB9JxpKaSA1H1Bvmx
          stance: supports
          locator: CBDB:635663
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635663）
          source: &a1
            id: s_UtpaXZB9JxpKaSA1H1Bvmx
            source_type: api_record
            title: 中国历代人物传记资料库：王丕行（CBDB 635663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635663&o=json
            external_identifier: CBDB:635663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_76we6BTe2JFLb5pXKBhuJ1
        subject_person_id: p_yVdVUVAvYVSxqbV3b2RJfj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕行，清人物。籍贯河南省，曾任訓導。（中国历代人物传记资料库 CBDB 635663）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WoJlkMEvGYfi_G-HS7bsW2
          claim_id: c_76we6BTe2JFLb5pXKBhuJ1
          source_id: s_UtpaXZB9JxpKaSA1H1Bvmx
          stance: supports
          locator: CBDB:635663
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

# 王丕行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丕行 | accepted |
| bio.summary | 王丕行，清人物。籍贯河南省，曾任訓導。（中国历代人物传记资料库 CBDB 635663） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丕行（CBDB 635663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635663&o=json)
