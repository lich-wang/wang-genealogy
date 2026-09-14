---
schema: wang-person/v1
id: p_V2V8T19kit7kSV7NWUMBHL
status: active
merged_into: null
display_name: 王同仁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4BSbqPt2Fk9HGwjZeRhi56
        subject_person_id: p_V2V8T19kit7kSV7NWUMBHL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1284D1wMXXTeF9TGRYK3H8
          claim_id: c_4BSbqPt2Fk9HGwjZeRhi56
          source_id: s_gC457Xbm1tMbedghNeexSH
          stance: supports
          locator: CBDB:221774
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221774）
          source: &a1
            id: s_gC457Xbm1tMbedghNeexSH
            source_type: api_record
            title: 中国历代人物传记资料库：王同仁（CBDB 221774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221774&o=json
            external_identifier: CBDB:221774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EUdKrMRuPLPTbw8UqqgFFr
        subject_person_id: p_V2V8T19kit7kSV7NWUMBHL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同仁，明人物。萬曆八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 221774）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AuV2o_GJFY8zMFEFmpX3DB
          claim_id: c_EUdKrMRuPLPTbw8UqqgFFr
          source_id: s_gC457Xbm1tMbedghNeexSH
          stance: supports
          locator: CBDB:221774
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ji46VKFjDydFRjo0von4ks
        subject_person_id: p_yzyPEUAYsfL49q52tBj1kq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V2V8T19kit7kSV7NWUMBHL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QNrzCuuHx2w-1k_8LVpVjy
          claim_id: c_Ji46VKFjDydFRjo0von4ks
          source_id: s_ct80nNoqxTDC1PVOWo6bbG
          stance: supports
          locator: CBDB：兄弟 王顯仁（206702）之父／母 王用中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同仁 与 王顯仁 为同胞（CBDB 记「兄」），王顯仁 之父／母即 王同仁 之父／母。
          source:
            id: s_ct80nNoqxTDC1PVOWo6bbG
            source_type: api_record
            title: 中国历代人物传记资料库：王同仁（CBDB 221774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221774&o=json
            external_identifier: CBDB:221774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yzyPEUAYsfL49q52tBj1kq
        status: active
        display_name: 王用中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4obMhcXnWOPeTXfqgAuA8j
        subject_person_id: p_88N8F7QC67BDANQ41w4EaZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V2V8T19kit7kSV7NWUMBHL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EMOUztOcI04hnB8OIxCXbl
          claim_id: c_4obMhcXnWOPeTXfqgAuA8j
          source_id: s_ct80nNoqxTDC1PVOWo6bbG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206702 王顯仁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ct80nNoqxTDC1PVOWo6bbG
            source_type: api_record
            title: 中国历代人物传记资料库：王同仁（CBDB 221774）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221774&o=json
            external_identifier: CBDB:221774
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_88N8F7QC67BDANQ41w4EaZ
        status: active
        display_name: 王顯仁
        merged_into_person_id: null
---

# 王同仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同仁 | accepted |
| bio.summary | 王同仁，明人物。萬曆八年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 221774） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yzyPEUAYsfL49q52tBj1kq | 王用中 | accepted |
| other | p_88N8F7QC67BDANQ41w4EaZ | 王顯仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同仁（CBDB 221774）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221774&o=json)
