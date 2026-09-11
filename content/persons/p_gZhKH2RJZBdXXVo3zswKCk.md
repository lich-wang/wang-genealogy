---
schema: wang-person/v1
id: p_gZhKH2RJZBdXXVo3zswKCk
status: active
merged_into: null
display_name: 宮澄
revision: 1
cbdb_id: 121814
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nCZXBM5Dk_wM1vHeuCaUlx
        subject_person_id: p_gZhKH2RJZBdXXVo3zswKCk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宮澄
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_D0Q2ov0fJDC_ZRckRd2Xwf
          claim_id: c_nCZXBM5Dk_wM1vHeuCaUlx
          source_id: s_3V7GnQcyzSFNSzg6ldF2xk
          stance: supports
          locator: CBDB:121814
          quotation: null
          interpretation_note: CBDB 明确记录的王蕙貞配偶
          source: &a1
            id: s_3V7GnQcyzSFNSzg6ldF2xk
            source_type: api_record
            title: 中国历代人物传记资料库：宮澄（CBDB 121814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121814&o=json
            external_identifier: CBDB:121814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GQAEpL5c491KN6UN-YKnVZ
        subject_person_id: p_46XipnUnHFjdtuwtK8Mp3F
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gZhKH2RJZBdXXVo3zswKCk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ndwu6bpWjERvkIRF3Ymnxe
          claim_id: c_GQAEpL5c491KN6UN-YKnVZ
          source_id: s_3V7GnQcyzSFNSzg6ldF2xk
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4257, HuWenKai #254：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_46XipnUnHFjdtuwtK8Mp3F
        status: active
        display_name: 王蕙貞
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 宮澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 宮澄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_46XipnUnHFjdtuwtK8Mp3F | 王蕙貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：宮澄（CBDB 121814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121814&o=json)
