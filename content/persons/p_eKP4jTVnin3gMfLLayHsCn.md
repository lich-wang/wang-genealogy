---
schema: wang-person/v1
id: p_eKP4jTVnin3gMfLLayHsCn
status: active
merged_into: null
display_name: 王然
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kahtkud5MZTQ7fDjLy3Zmf
        subject_person_id: p_eKP4jTVnin3gMfLLayHsCn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王然
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZdsJ3vSKmSXH7d8tsFXTDt
          claim_id: c_Kahtkud5MZTQ7fDjLy3Zmf
          source_id: s_BBKxBJqbqC13DHfAdWZhaK
          stance: supports
          locator: CBDB:1830
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1830）
          source: &a1
            id: s_BBKxBJqbqC13DHfAdWZhaK
            source_type: api_record
            title: 中国历代人物传记资料库：王然（CBDB 1830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1830&o=json
            external_identifier: CBDB:1830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.309Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HwwEQtCVZAguUYaY9qCd9M
        subject_person_id: p_eKP4jTVnin3gMfLLayHsCn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王然，宋人物。曾任提舉。（中国历代人物传记资料库 CBDB 1830）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9dPiHYdwWQhytBOvtkaOHA
          claim_id: c_HwwEQtCVZAguUYaY9qCd9M
          source_id: s_BBKxBJqbqC13DHfAdWZhaK
          stance: supports
          locator: CBDB:1830
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

# 王然

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王然 | accepted |
| bio.summary | 王然，宋人物。曾任提舉。（中国历代人物传记资料库 CBDB 1830） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王然（CBDB 1830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1830&o=json)
