---
schema: wang-person/v1
id: p_dU5JtPeURKS2JejUB33EAb
status: active
merged_into: null
display_name: 王文郁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GG8Fm7F31426YUPguiA1vS
        subject_person_id: p_dU5JtPeURKS2JejUB33EAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文郁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dVYvzeni5xZAVnKcfKKkNF
          claim_id: c_GG8Fm7F31426YUPguiA1vS
          source_id: s_JqpbwMvn8uvCofRaD5HMZH
          stance: supports
          locator: CBDB:22182
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22182）
          source: &a1
            id: s_JqpbwMvn8uvCofRaD5HMZH
            source_type: api_record
            title: 中国历代人物传记资料库：王文郁（CBDB 22182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22182&o=json
            external_identifier: CBDB:22182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v5SJcZ4oNp8xgFZqy2GTv7
        subject_person_id: p_dU5JtPeURKS2JejUB33EAb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文郁，宋人物。籍贯新秦，身份为武將，曾任觀察使、判、尚書左僕射。（中国历代人物传记资料库 CBDB 22182）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rwOox0lk4OPUL6WawA80gZ
          claim_id: c_v5SJcZ4oNp8xgFZqy2GTv7
          source_id: s_JqpbwMvn8uvCofRaD5HMZH
          stance: supports
          locator: CBDB:22182
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

# 王文郁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文郁 | accepted |
| bio.summary | 王文郁，宋人物。籍贯新秦，身份为武將，曾任觀察使、判、尚書左僕射。（中国历代人物传记资料库 CBDB 22182） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文郁（CBDB 22182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22182&o=json)
