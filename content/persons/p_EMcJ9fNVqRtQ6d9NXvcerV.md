---
schema: wang-person/v1
id: p_EMcJ9fNVqRtQ6d9NXvcerV
status: active
merged_into: null
display_name: 王康
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DHrJS4bNiyn3byAqTfgEDd
        subject_person_id: p_EMcJ9fNVqRtQ6d9NXvcerV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8Nm9u46fbKN7bLzSuXjY6W
          claim_id: c_DHrJS4bNiyn3byAqTfgEDd
          source_id: s_ck87NE7fwgpouGzP6KYPZg
          stance: supports
          locator: CBDB:126438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126438）
          source: &a1
            id: s_ck87NE7fwgpouGzP6KYPZg
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 126438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126438&o=json
            external_identifier: CBDB:126438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tbJ2JMN4hfvLGMsd4yEc7a
        subject_person_id: p_EMcJ9fNVqRtQ6d9NXvcerV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1397年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Wo3oLjk8bycAniRjno9cw
          claim_id: c_tbJ2JMN4hfvLGMsd4yEc7a
          source_id: s_ck87NE7fwgpouGzP6KYPZg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_yBUAA4mySt3cKndFaE5Zbb
        subject_person_id: p_EMcJ9fNVqRtQ6d9NXvcerV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1452年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T5WX894dJKWy7QfpYhDMCy
          claim_id: c_yBUAA4mySt3cKndFaE5Zbb
          source_id: s_ck87NE7fwgpouGzP6KYPZg
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
        id: c_ZVj22h6gXc1uFhxuuobeD6
        subject_person_id: p_EMcJ9fNVqRtQ6d9NXvcerV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VDMKnY8EjAkA6bt6MVdj28
          claim_id: c_ZVj22h6gXc1uFhxuuobeD6
          source_id: s_ck87NE7fwgpouGzP6KYPZg
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T-8Bh_6sfbtlg9vULbyhgN
        subject_person_id: p_wva8S4L3AonNxsNCukizbf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EMcJ9fNVqRtQ6d9NXvcerV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FfjD4D3hoBfjWzajPKNid8
          claim_id: c_T-8Bh_6sfbtlg9vULbyhgN
          source_id: s_ck87NE7fwgpouGzP6KYPZg
          stance: supports
          locator: 仙居志，lgid=356630：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wva8S4L3AonNxsNCukizbf
        status: active
        display_name: 王峻用
        merged_into_person_id: null
  children:
    - claim:
        id: c_OEp49lTcnro8vrWM5gTjCW
        subject_person_id: p_EMcJ9fNVqRtQ6d9NXvcerV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GFrooVzzrxeHgYPEmPZZP7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rcmrFjlMD7a7p5pD2qy_uG
          claim_id: c_OEp49lTcnro8vrWM5gTjCW
          source_id: s_ck87NE7fwgpouGzP6KYPZg
          stance: supports
          locator: 仙居志，lgid=356630：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GFrooVzzrxeHgYPEmPZZP7
        status: active
        display_name: 王顯
        merged_into_person_id: null
    - claim:
        id: c_fY23bw25aPPk9VKq5TYGcG
        subject_person_id: p_EMcJ9fNVqRtQ6d9NXvcerV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xsRKh3oaCCiisCvdtEF5rH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v51b3ysIJTTIhljW0f0EaP
          claim_id: c_fY23bw25aPPk9VKq5TYGcG
          source_id: s_ck87NE7fwgpouGzP6KYPZg
          stance: supports
          locator: 仙居志，lgid=356630：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xsRKh3oaCCiisCvdtEF5rH
        status: active
        display_name: 王春
        merged_into_person_id: null
    - claim:
        id: c_DYSVF_20MACqhNrERfSa1e
        subject_person_id: p_EMcJ9fNVqRtQ6d9NXvcerV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HEamBXxgSfgum2umZPbasc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B9A3P50VdrXfzDomsnXZLi
          claim_id: c_DYSVF_20MACqhNrERfSa1e
          source_id: s_ck87NE7fwgpouGzP6KYPZg
          stance: supports
          locator: 仙居志，lgid=356630：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HEamBXxgSfgum2umZPbasc
        status: active
        display_name: 王字
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康 | accepted |
| birth.date | 1397年 | accepted |
| death.date | 1452年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wva8S4L3AonNxsNCukizbf | 王峻用 | accepted |
| children | p_GFrooVzzrxeHgYPEmPZZP7 | 王顯 | accepted |
| children | p_xsRKh3oaCCiisCvdtEF5rH | 王春 | accepted |
| children | p_HEamBXxgSfgum2umZPbasc | 王字 | accepted |

## 外部来源

- [中国历代人物传记资料库：王康（CBDB 126438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126438&o=json)
