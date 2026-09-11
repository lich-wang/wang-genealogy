---
schema: wang-person/v1
id: p_VTPD5ERN4nKpvDScS6wxja
status: active
merged_into: null
display_name: 王贵
cbdb_id: 302566
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9fcHHdx6B7vWMcSz7AjGe9
        subject_person_id: p_VTPD5ERN4nKpvDScS6wxja
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贵
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AyTQCoe4d11CyTPCYuvGaH
          claim_id: c_9fcHHdx6B7vWMcSz7AjGe9
          source_id: s_LrzG6DKCN156m5wAdTojaB
          stance: supports
          locator: Q16075276
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_LrzG6DKCN156m5wAdTojaB
            source_type: api_record
            title: 维基数据：王贵（Q16075276）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16075276
            external_identifier: Q16075276
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%B2%B4_(%E6%98%8E%E6%9C%9D)
        - id: cs_bMpmhcHW9rG2NEAr87GP6x
          claim_id: c_9fcHHdx6B7vWMcSz7AjGe9
          source_id: s_NsH2JrA7zFChzTypXUmby7
          stance: supports
          locator: CBDB:302566
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_NsH2JrA7zFChzTypXUmby7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王貴（302566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302566&o=json
            external_identifier: CBDB:302566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8T78zn16DHV8iqzGTFhs2W
        subject_person_id: p_VTPD5ERN4nKpvDScS6wxja
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 302566
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xJZAVL4QupJKCxPreXiNXz
          claim_id: c_8T78zn16DHV8iqzGTFhs2W
          source_id: s_LrzG6DKCN156m5wAdTojaB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZZpPi8bmZHB2wwRG5dKmC8
        subject_person_id: p_VTPD5ERN4nKpvDScS6wxja
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XwKHLH17io2m6CKt414qzT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GK1QETbiiBYdDt73Y8xUS9
          claim_id: c_ZZpPi8bmZHB2wwRG5dKmC8
          source_id: s_LrzG6DKCN156m5wAdTojaB
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_6s6FcAiyMd2TBuPvfPqrUD
          claim_id: c_ZZpPi8bmZHB2wwRG5dKmC8
          source_id: s_FJJor8JkBzSB2pWbDy1n7F
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FJJor8JkBzSB2pWbDy1n7F
            source_type: api_record
            title: 维基数据：王伍（Q45601163）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45601163
            external_identifier: Q45601163
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:19.152Z
            metadata_json: null
      object_person:
        id: p_XwKHLH17io2m6CKt414qzT
        status: active
        display_name: 王伍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c__X5KIwEdKwgAD0jvIkkktG
        subject_person_id: p_VTPD5ERN4nKpvDScS6wxja
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MQQyuFRHwHza48Rxy8cmUZ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tqaNPZKAO3uEO110zAJl07
          claim_id: c__X5KIwEdKwgAD0jvIkkktG
          source_id: s_NsH2JrA7zFChzTypXUmby7
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第四十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_MQQyuFRHwHza48Rxy8cmUZ
        status: active
        display_name: 王重光
        merged_into_person_id: null
  other: []
---

# 王贵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王贵 | accepted |
| bio.summary | Ming dynasty person CBDB = 302566 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_XwKHLH17io2m6CKt414qzT | 王伍 | accepted |
| descendants | p_MQQyuFRHwHza48Rxy8cmUZ | 王重光 | accepted |

## 外部来源

- [维基数据：王贵（Q16075276）](https://www.wikidata.org/wiki/Q16075276)
- [维基数据：王伍（Q45601163）](https://www.wikidata.org/wiki/Q45601163)
- [CBDB 中国历代人物传记资料库：王貴（302566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302566&o=json)
