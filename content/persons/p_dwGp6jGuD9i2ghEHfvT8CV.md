---
schema: wang-person/v1
id: p_dwGp6jGuD9i2ghEHfvT8CV
status: active
merged_into: null
display_name: 王闕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p86wWbJiSPGVMh4KMbPFhc
        subject_person_id: p_dwGp6jGuD9i2ghEHfvT8CV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qCVW9LsPNUhpwdhvQVittQ
          claim_id: c_p86wWbJiSPGVMh4KMbPFhc
          source_id: s_971T4M1tZbuJLuK5rQxe9B
          stance: supports
          locator: CBDB:323757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323757）
          source: &a1
            id: s_971T4M1tZbuJLuK5rQxe9B
            source_type: api_record
            title: 中国历代人物传记资料库：王闕（CBDB 323757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323757&o=json
            external_identifier: CBDB:323757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B21PcQX23jKA8sYomJZ8tA
        subject_person_id: p_dwGp6jGuD9i2ghEHfvT8CV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闕，明人物。嘉靖三十八年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 323757）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q6YlbKqUrzGA-t2YBLe__3
          claim_id: c_B21PcQX23jKA8sYomJZ8tA
          source_id: s_971T4M1tZbuJLuK5rQxe9B
          stance: supports
          locator: CBDB:323757
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

# 王闕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王闕 | accepted |
| bio.summary | 王闕，明人物。嘉靖三十八年進士，籍贯清苑。（中国历代人物传记资料库 CBDB 323757） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王闕（CBDB 323757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323757&o=json)
