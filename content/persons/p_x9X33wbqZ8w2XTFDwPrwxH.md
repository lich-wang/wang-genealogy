---
schema: wang-person/v1
id: p_x9X33wbqZ8w2XTFDwPrwxH
status: active
merged_into: null
display_name: 王珏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QxHi1yMVa8U3fT3si5cfe8
        subject_person_id: p_x9X33wbqZ8w2XTFDwPrwxH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MMS5tfbYVwrDP6NmMKMVad
          claim_id: c_QxHi1yMVa8U3fT3si5cfe8
          source_id: s_ACn8KApWwGNRXC6THxASJh
          stance: supports
          locator: CBDB:190166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190166）
          source: &a1
            id: s_ACn8KApWwGNRXC6THxASJh
            source_type: api_record
            title: 中国历代人物传记资料库：王珏（CBDB 190166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190166&o=json
            external_identifier: CBDB:190166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PR7kSqLVLj6tgCk3cMhZ6U
        subject_person_id: p_x9X33wbqZ8w2XTFDwPrwxH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1022年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4GE51U3aV2V98RqZttyP2E
          claim_id: c_PR7kSqLVLj6tgCk3cMhZ6U
          source_id: s_ACn8KApWwGNRXC6THxASJh
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6bBwu6YKPFU74kdhc21uRc
        subject_person_id: p_x9X33wbqZ8w2XTFDwPrwxH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏（卒于1022年），宋人物。籍贯建州，曾任指揮使。（中国历代人物传记资料库 CBDB 190166）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yNugynfASgnzVeFVsFWFZ7
          claim_id: c_6bBwu6YKPFU74kdhc21uRc
          source_id: s_ACn8KApWwGNRXC6THxASJh
          stance: supports
          locator: CBDB:190166
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Sfjbd2PEDK3VGccsD830I_
        subject_person_id: p_dHK6S2CF83o7bsW1omDPPe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_x9X33wbqZ8w2XTFDwPrwxH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mhwcYIa5EtIiwW5kf8k1h8
          claim_id: c_Sfjbd2PEDK3VGccsD830I_
          source_id: s_V2fSUyMizNfJqvRAfkJqCX
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_V2fSUyMizNfJqvRAfkJqCX
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 144860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144860&o=json
            external_identifier: CBDB:144860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHK6S2CF83o7bsW1omDPPe
        status: active
        display_name: 王裕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珏 | accepted |
| death.date | 1022年 | accepted |
| bio.summary | 王珏（卒于1022年），宋人物。籍贯建州，曾任指揮使。（中国历代人物传记资料库 CBDB 190166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dHK6S2CF83o7bsW1omDPPe | 王裕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珏（CBDB 190166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190166&o=json)
- [中国历代人物传记资料库：王裕（CBDB 144860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144860&o=json)
