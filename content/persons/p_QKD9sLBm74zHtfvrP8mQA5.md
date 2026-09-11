---
schema: wang-person/v1
id: p_QKD9sLBm74zHtfvrP8mQA5
status: active
merged_into: null
display_name: 王子賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ueQG3i65P1suYjMKhZRom6
        subject_person_id: p_QKD9sLBm74zHtfvrP8mQA5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gvMyAdcsKkJqiTmzRu5e86
          claim_id: c_ueQG3i65P1suYjMKhZRom6
          source_id: s_NaxMFc6zzRLw6bAn6ZEgVF
          stance: supports
          locator: CBDB:636996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636996）
          source: &a1
            id: s_NaxMFc6zzRLw6bAn6ZEgVF
            source_type: api_record
            title: 中国历代人物传记资料库：王子賓（CBDB 636996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636996&o=json
            external_identifier: CBDB:636996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6ebVapBcZS2Px6RNH1eZqW
        subject_person_id: p_QKD9sLBm74zHtfvrP8mQA5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王子賓，清人物。籍贯保寧府，入仕貢生: 拔貢，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 636996）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sYUOLKqhup8JGx9avldbMm
          claim_id: c_6ebVapBcZS2Px6RNH1eZqW
          source_id: s_NaxMFc6zzRLw6bAn6ZEgVF
          stance: supports
          locator: CBDB:636996
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

# 王子賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子賓 | accepted |
| bio.summary | 王子賓，清人物。籍贯保寧府，入仕貢生: 拔貢，曾任教授、復設教諭。（中国历代人物传记资料库 CBDB 636996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子賓（CBDB 636996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636996&o=json)
