---
schema: wang-person/v1
id: p_pQRg6t4NjSS4zVcBRruhDG
status: active
merged_into: null
display_name: 王仁全
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FZwZGmsMTwzx5PeKJ7WN5B
        subject_person_id: p_pQRg6t4NjSS4zVcBRruhDG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k7syx36v11Kyt3Ps5RWxn2
          claim_id: c_FZwZGmsMTwzx5PeKJ7WN5B
          source_id: s_nyMLaeCFWhz2jwFd3ScN3k
          stance: supports
          locator: CBDB:635879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635879）
          source: &a1
            id: s_nyMLaeCFWhz2jwFd3ScN3k
            source_type: api_record
            title: 中国历代人物传记资料库：王仁全（CBDB 635879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635879&o=json
            external_identifier: CBDB:635879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V386ztCxoSo3UgfZZsyzga
        subject_person_id: p_pQRg6t4NjSS4zVcBRruhDG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁全，清人物。籍贯安義，曾任訓導。（中国历代人物传记资料库 CBDB 635879）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rywQr8B00gRc1kgfClQ9au
          claim_id: c_V386ztCxoSo3UgfZZsyzga
          source_id: s_nyMLaeCFWhz2jwFd3ScN3k
          stance: supports
          locator: CBDB:635879
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

# 王仁全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁全 | accepted |
| bio.summary | 王仁全，清人物。籍贯安義，曾任訓導。（中国历代人物传记资料库 CBDB 635879） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁全（CBDB 635879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635879&o=json)
