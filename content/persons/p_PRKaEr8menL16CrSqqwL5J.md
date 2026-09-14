---
schema: wang-person/v1
id: p_PRKaEr8menL16CrSqqwL5J
status: active
merged_into: null
display_name: 王濂
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vQTcDfGJ92dRWvYzywv2sq
        subject_person_id: p_PRKaEr8menL16CrSqqwL5J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XNh9dpjWicT1cTQAmhivRj
          claim_id: c_vQTcDfGJ92dRWvYzywv2sq
          source_id: s_7CP5EPFXNASY1dbtDS2jhC
          stance: supports
          locator: CBDB:321235
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（321235）
          source: &a1
            id: s_7CP5EPFXNASY1dbtDS2jhC
            source_type: api_record
            title: 中国历代人物传记资料库：王濂（CBDB 321235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321235&o=json
            external_identifier: CBDB:321235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Huq3QCVNLSM3EHuJ7VZKHu
        subject_person_id: p_PRKaEr8menL16CrSqqwL5J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濂，明人物。嘉靖三十五年進士，籍贯臨淄。（中国历代人物传记资料库 CBDB 321235）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9QE19_mImNoq6uMyAmLFT7
          claim_id: c_Huq3QCVNLSM3EHuJ7VZKHu
          source_id: s_7CP5EPFXNASY1dbtDS2jhC
          stance: supports
          locator: CBDB:321235
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_nQYAmSlb-gSiumt0QnER-h
        subject_person_id: p_PRKaEr8menL16CrSqqwL5J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FZsZBsVgtXYBR7R5He9YWs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8hvxXXBwPQviAE1HNJRTp1
          claim_id: c_nQYAmSlb-gSiumt0QnER-h
          source_id: s_7CP5EPFXNASY1dbtDS2jhC
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第三甲第一百一十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FZsZBsVgtXYBR7R5He9YWs
        status: active
        display_name: 王嘉言
        merged_into_person_id: null
    - claim:
        id: c_CqyiNW6m9DMcaLCygq-dl9
        subject_person_id: p_PRKaEr8menL16CrSqqwL5J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CQpanbYc9L4SQ7yTi4cv2B
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B1QFJchoAgmuxOU2Ce6MPK
          claim_id: c_CqyiNW6m9DMcaLCygq-dl9
          source_id: s_pzOcgMz15d3BgIgdpllyFr
          stance: supports
          locator: CBDB：兄弟 王嘉言（204590）之父／母 王濂
          quotation: null
          interpretation_note: 由兄弟关系推断：王用言 与 王嘉言 为同胞（CBDB 记「兄」），王嘉言 之父／母即 王用言 之父／母。
          source:
            id: s_pzOcgMz15d3BgIgdpllyFr
            source_type: api_record
            title: 中国历代人物传记资料库：王用言（CBDB 321241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321241&o=json
            external_identifier: CBDB:321241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CQpanbYc9L4SQ7yTi4cv2B
        status: active
        display_name: 王用言
        merged_into_person_id: null
    - claim:
        id: c_k3IHtRN0zgaiz-ERglZvn8
        subject_person_id: p_PRKaEr8menL16CrSqqwL5J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CqRLubCAJw2W8PMASBJVc6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lnOw5mM4JhOTmUD1Tigiet
          claim_id: c_k3IHtRN0zgaiz-ERglZvn8
          source_id: s_Tli5fbZc67TWwuo1x2LMyN
          stance: supports
          locator: CBDB：兄弟 王嘉言（204590）之父／母 王濂
          quotation: null
          interpretation_note: 由兄弟关系推断：王巽言 与 王嘉言 为同胞（CBDB 记「兄」），王嘉言 之父／母即 王巽言 之父／母。
          source:
            id: s_Tli5fbZc67TWwuo1x2LMyN
            source_type: api_record
            title: 中国历代人物传记资料库：王巽言（CBDB 321239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321239&o=json
            external_identifier: CBDB:321239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CqRLubCAJw2W8PMASBJVc6
        status: active
        display_name: 王巽言
        merged_into_person_id: null
    - claim:
        id: c_P2TFvKjwIJpCgM-BJE9dbe
        subject_person_id: p_PRKaEr8menL16CrSqqwL5J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CyCQkBsjyMATib6ZPd3cVm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lDWbVCSGluYyCmXzDcLfQQ
          claim_id: c_P2TFvKjwIJpCgM-BJE9dbe
          source_id: s_oEkEmXqOVuyVyUKsjBurcr
          stance: supports
          locator: CBDB：兄弟 王嘉言（204590）之父／母 王濂
          quotation: null
          interpretation_note: 由兄弟关系推断：王陳言 与 王嘉言 为同胞（CBDB 记「弟」），王嘉言 之父／母即 王陳言 之父／母。
          source:
            id: s_oEkEmXqOVuyVyUKsjBurcr
            source_type: api_record
            title: 中国历代人物传记资料库：王陳言（CBDB 321238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321238&o=json
            external_identifier: CBDB:321238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CyCQkBsjyMATib6ZPd3cVm
        status: active
        display_name: 王陳言
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王濂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濂 | accepted |
| bio.summary | 王濂，明人物。嘉靖三十五年進士，籍贯臨淄。（中国历代人物传记资料库 CBDB 321235） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_FZsZBsVgtXYBR7R5He9YWs | 王嘉言 | accepted |
| children | p_CQpanbYc9L4SQ7yTi4cv2B | 王用言 | accepted |
| children | p_CqRLubCAJw2W8PMASBJVc6 | 王巽言 | accepted |
| children | p_CyCQkBsjyMATib6ZPd3cVm | 王陳言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王陳言（CBDB 321238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321238&o=json)
- [中国历代人物传记资料库：王濂（CBDB 321235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321235&o=json)
- [中国历代人物传记资料库：王巽言（CBDB 321239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321239&o=json)
- [中国历代人物传记资料库：王用言（CBDB 321241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321241&o=json)
