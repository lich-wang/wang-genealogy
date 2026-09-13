---
schema: wang-person/v1
id: p_oXgB7fWB5Zz4xW1VtwDtA9
status: active
merged_into: null
display_name: 陈氏
cbdb_id: 252226
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7v8gaKgIFmucBVd4l7e-QP
        subject_person_id: p_oXgB7fWB5Zz4xW1VtwDtA9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈氏，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 252226）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_hH_Y3KF4K6GWn-LVHruc9o
          claim_id: c_7v8gaKgIFmucBVd4l7e-QP
          source_id: s_dWXqmkYByTaDkcvnSCZy9k
          stance: supports
          locator: CBDB:252226
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dWXqmkYByTaDkcvnSCZy9k
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳氏（252226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252226&o=json
            external_identifier: CBDB:252226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:16.602Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gbZDM1SyvRMPX7Y2mu6Xy3
        subject_person_id: p_oXgB7fWB5Zz4xW1VtwDtA9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1RGBe68aX6HhBzKyGisrJX
          claim_id: c_gbZDM1SyvRMPX7Y2mu6Xy3
          source_id: s_jq1Czn2GP2HCn7QofGfr5t
          stance: supports
          locator: Q65856928
          quotation: null
          interpretation_note: null
          source:
            id: s_jq1Czn2GP2HCn7QofGfr5t
            source_type: api_record
            title: 维基数据：陈氏（Q65856928）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65856928
            external_identifier: Q65856928
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:16.452Z
            metadata_json: null
        - id: cs_ML23CxyfPF7AC3jwC4CW4z
          claim_id: c_gbZDM1SyvRMPX7Y2mu6Xy3
          source_id: s_dWXqmkYByTaDkcvnSCZy9k
          stance: supports
          locator: Q65856928
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_vwBN5HCW6nwqnpuRVcZCyf
        subject_person_id: p_2CY82LiLunPZpBKWzpBz3S
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_oXgB7fWB5Zz4xW1VtwDtA9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_a8AQs1o1443aAAN4ijHu71
          claim_id: c_vwBN5HCW6nwqnpuRVcZCyf
          source_id: s_KiKcwY7ixByX4xMwNVCevX
          stance: supports
          locator: 亲属关系：第二任妻
          quotation: null
          interpretation_note: CBDB 注明此条来源：成化十四年進士登科錄:一卷
          source:
            id: s_KiKcwY7ixByX4xMwNVCevX
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王倬（126663）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126663&o=json
            external_identifier: CBDB:126663
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:55.585Z
            metadata_json: null
        - id: cs_wiEE2MZfwHwncKZ8vSWX9U
          claim_id: c_vwBN5HCW6nwqnpuRVcZCyf
          source_id: s_WHsNKn1tPFGnXwAiuPuc2t
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_WHsNKn1tPFGnXwAiuPuc2t
            source_type: api_record
            title: 维基数据：王倬（Q20063835）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q20063835
            external_identifier: Q20063835
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:55.454Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%80%AC_(%E6%88%90%E5%8C%96%E9%80%B2%E5%A3%AB)
        - id: cs_bCLKF7Xih8RfovKYrARJDV
          claim_id: c_vwBN5HCW6nwqnpuRVcZCyf
          source_id: s_jq1Czn2GP2HCn7QofGfr5t
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_jq1Czn2GP2HCn7QofGfr5t
            source_type: api_record
            title: 维基数据：陈氏（Q65856928）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65856928
            external_identifier: Q65856928
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:10:16.452Z
            metadata_json: null
        - id: cs_iiW6P2Jybgb4Jc9uZXETT6
          claim_id: c_vwBN5HCW6nwqnpuRVcZCyf
          source_id: s_dWXqmkYByTaDkcvnSCZy9k
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：成化十四年進士登科錄:一卷
          source:
            id: s_dWXqmkYByTaDkcvnSCZy9k
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳氏（252226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252226&o=json
            external_identifier: CBDB:252226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:10:16.602Z
            metadata_json: null
      object_person:
        id: p_2CY82LiLunPZpBKWzpBz3S
        status: active
        display_name: 王倬
        merged_into_person_id: null
    - claim:
        id: c_deSYdxDXsNgFTGeZle_P9t
        subject_person_id: p_oXgB7fWB5Zz4xW1VtwDtA9
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_2CY82LiLunPZpBKWzpBz3S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U75HLlHfOjbJHdAUzWr9bc
          claim_id: c_deSYdxDXsNgFTGeZle_P9t
          source_id: s_dWXqmkYByTaDkcvnSCZy9k
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第五十九名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2CY82LiLunPZpBKWzpBz3S
        status: active
        display_name: 王倬
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陈氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陈氏，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 252226） | accepted |
| name.primary | 陈氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2CY82LiLunPZpBKWzpBz3S | 王倬 | accepted |
| spouses | p_2CY82LiLunPZpBKWzpBz3S | 王倬 | accepted |

## 外部来源

- [维基数据：陈氏（Q65856928）](https://www.wikidata.org/wiki/Q65856928)
- [维基数据：王倬（Q20063835）](https://www.wikidata.org/wiki/Q20063835)
- [CBDB 中国历代人物传记资料库：陳氏（252226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252226&o=json)
- [CBDB 中国历代人物传记资料库：王倬（126663）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126663&o=json)
