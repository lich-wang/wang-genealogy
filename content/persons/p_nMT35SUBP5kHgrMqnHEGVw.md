---
schema: wang-person/v1
id: p_nMT35SUBP5kHgrMqnHEGVw
status: active
merged_into: null
display_name: 王舜耕
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lu8u5GUGLUDmVGEW12JYfq
        subject_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜耕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ynEeuQ426ez4znaVUr4NvB
          claim_id: c_Lu8u5GUGLUDmVGEW12JYfq
          source_id: s_ESkvBg3tPgbFqAg6HAZWai
          stance: supports
          locator: CBDB:126734
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126734）
          source: &a1
            id: s_ESkvBg3tPgbFqAg6HAZWai
            source_type: api_record
            title: 中国历代人物传记资料库：王舜耕（CBDB 126734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126734&o=json
            external_identifier: CBDB:126734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.183Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2dLRHBAJzJDMp6br8Uc1FU
        subject_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1484年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1p2Yik15c1H294ccHTH1wg
          claim_id: c_2dLRHBAJzJDMp6br8Uc1FU
          source_id: s_ESkvBg3tPgbFqAg6HAZWai
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
        id: c_Lg4hh7AQZJS5gbPK1yuSnA
        subject_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1554年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tgmu2KAYFfFMWDpiZiWi8B
          claim_id: c_Lg4hh7AQZJS5gbPK1yuSnA
          source_id: s_ESkvBg3tPgbFqAg6HAZWai
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
        id: c_qFyMyXVeC47AdieYCmoP1G
        subject_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜耕（1484年—1554年），明人物。明清進士進士，籍贯常熟，入仕進士，曾任巡按、巡鹽御史、知縣。（中国历代人物传记资料库 CBDB 126734）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CVAKQqWtXBf3YNfEmkUxqU
          claim_id: c_qFyMyXVeC47AdieYCmoP1G
          source_id: s_ESkvBg3tPgbFqAg6HAZWai
          stance: supports
          locator: CBDB:126734
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vf8nQqGX2Y35GjzNxv3usf
        subject_person_id: p_2hjZsbenJ87Bo5wxCf861P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZBFmhgXee6lMViC030OH9j
          claim_id: c_vf8nQqGX2Y35GjzNxv3usf
          source_id: s_oL5csJSw2bgBCPoxoaRmFd
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oL5csJSw2bgBCPoxoaRmFd
            source_type: api_record
            title: 中国历代人物传记资料库：王原吉（CBDB 279499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279499&o=json
            external_identifier: CBDB:279499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2hjZsbenJ87Bo5wxCf861P
        status: active
        display_name: 王原吉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_2W6N5om6lOqnB1GCrX8Pls
        subject_person_id: p_5nrw3iNVBvh7TQevnKJj8F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5ZA6n05NDj91qNSHA54CXm
          claim_id: c_2W6N5om6lOqnB1GCrX8Pls
          source_id: s_QtqkMAGXv1rCP2bNHUq4YH
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QtqkMAGXv1rCP2bNHUq4YH
            source_type: api_record
            title: 中国历代人物传记资料库：王廷美（CBDB 279498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279498&o=json
            external_identifier: CBDB:279498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5nrw3iNVBvh7TQevnKJj8F
        status: active
        display_name: 王廷美
        merged_into_person_id: null
    - claim:
        id: c_wBvpOmvlh5kLS6BgMi6YrP
        subject_person_id: p_WHtAMm4ATWgH9kokKMnTUo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nMT35SUBP5kHgrMqnHEGVw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kZ-XUsUzvfYu5Rer58HhOG
          claim_id: c_wBvpOmvlh5kLS6BgMi6YrP
          source_id: s_xrn8BFdA4MCd94LrUD5zZB
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xrn8BFdA4MCd94LrUD5zZB
            source_type: api_record
            title: 中国历代人物传记资料库：王孟德（CBDB 279496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279496&o=json
            external_identifier: CBDB:279496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_WHtAMm4ATWgH9kokKMnTUo
        status: active
        display_name: 王孟德
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王舜耕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜耕 | accepted |
| birth.date | 1484年 | accepted |
| death.date | 1554年 | accepted |
| bio.summary | 王舜耕（1484年—1554年），明人物。明清進士進士，籍贯常熟，入仕進士，曾任巡按、巡鹽御史、知縣。（中国历代人物传记资料库 CBDB 126734） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2hjZsbenJ87Bo5wxCf861P | 王原吉 | accepted |
| ancestors | p_5nrw3iNVBvh7TQevnKJj8F | 王廷美 | accepted |
| ancestors | p_WHtAMm4ATWgH9kokKMnTUo | 王孟德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟德（CBDB 279496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279496&o=json)
- [中国历代人物传记资料库：王舜耕（CBDB 126734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126734&o=json)
- [中国历代人物传记资料库：王廷美（CBDB 279498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279498&o=json)
- [中国历代人物传记资料库：王原吉（CBDB 279499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279499&o=json)
