---
schema: wang-person/v1
id: p_dseW7FZ8awf2U56iZSpcya
status: active
merged_into: null
display_name: 王脩甫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SkeK5914tx9zy6vARVqReH
        subject_person_id: p_dseW7FZ8awf2U56iZSpcya
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王脩甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_id99KVtgrH29FGPJbu7tTh
          claim_id: c_SkeK5914tx9zy6vARVqReH
          source_id: s_QnJWAPQrU5SJW58U6sSAiN
          stance: supports
          locator: CBDB:101348
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101348）
          source: &a1
            id: s_QnJWAPQrU5SJW58U6sSAiN
            source_type: api_record
            title: 中国历代人物传记资料库：王脩甫（CBDB 101348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101348&o=json
            external_identifier: CBDB:101348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kw19vGhYNhydqxqoPqktAn
        subject_person_id: p_dseW7FZ8awf2U56iZSpcya
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王脩甫，元人物。籍贯東平路。（中国历代人物传记资料库 CBDB 101348）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MwRKLt0Uihm7VjiZHiWyHp
          claim_id: c_kw19vGhYNhydqxqoPqktAn
          source_id: s_QnJWAPQrU5SJW58U6sSAiN
          stance: supports
          locator: CBDB:101348
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

# 王脩甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王脩甫 | accepted |
| bio.summary | 王脩甫，元人物。籍贯東平路。（中国历代人物传记资料库 CBDB 101348） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王脩甫（CBDB 101348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101348&o=json)
