---
schema: wang-person/v1
id: p_FL6Az72NGqaTwTmAdfMBte
status: active
merged_into: null
display_name: 王懋德
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hBbNL4P525gx88vVhL9JRG
        subject_person_id: p_FL6Az72NGqaTwTmAdfMBte
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4FXG1fwG7iSYh194GboewX
          claim_id: c_hBbNL4P525gx88vVhL9JRG
          source_id: s_ZsCm8Vamh7CW2SaQFGb3JL
          stance: supports
          locator: CBDB:126854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126854）
          source: &a1
            id: s_ZsCm8Vamh7CW2SaQFGb3JL
            source_type: api_record
            title: 中国历代人物传记资料库：王懋德（CBDB 126854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126854&o=json
            external_identifier: CBDB:126854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zFkQS4tCD7D2WKocYMNqxX
        subject_person_id: p_FL6Az72NGqaTwTmAdfMBte
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋德，明人物。明清進士進士，籍贯文昌，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 126854）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9j2zbH9iO7t2Vc4rCwpEUa
          claim_id: c_zFkQS4tCD7D2WKocYMNqxX
          source_id: s_ZsCm8Vamh7CW2SaQFGb3JL
          stance: supports
          locator: CBDB:126854
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_kMx4mpg_Kbo6HKkJZ7DARv
        subject_person_id: p_iK7J2v9nYEqAqfNJHxwFuC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FL6Az72NGqaTwTmAdfMBte
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wY47WgIHuE-_ZO304zfCK7
          claim_id: c_kMx4mpg_Kbo6HKkJZ7DARv
          source_id: s_AgzRmVL4H3ueEnRHC71KzN
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AgzRmVL4H3ueEnRHC71KzN
            source_type: api_record
            title: 中国历代人物传记资料库：王良弼（CBDB 334279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334279&o=json
            external_identifier: CBDB:334279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.442Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iK7J2v9nYEqAqfNJHxwFuC
        status: active
        display_name: 王良弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Q1XO8keSJWL4LZnmZJ0ApM
        subject_person_id: p_DG3mQvkRF6cAieQLfbw7xA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FL6Az72NGqaTwTmAdfMBte
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RjKeaaKvtaMu5EW4PXZuRn
          claim_id: c_Q1XO8keSJWL4LZnmZJ0ApM
          source_id: s_CJXhKemsH7wA8zBJ156bVk
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第六十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CJXhKemsH7wA8zBJ156bVk
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 334278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334278&o=json
            external_identifier: CBDB:334278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.442Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DG3mQvkRF6cAieQLfbw7xA
        status: active
        display_name: 王賓
        merged_into_person_id: null
    - claim:
        id: c_Qg9ZC2L1yh6Xwdy65qWaxX
        subject_person_id: p_SAm8qh9b4YSVEVKhd8CvU4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FL6Az72NGqaTwTmAdfMBte
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HPuyQsz5kGPFxH72s3LpVq
          claim_id: c_Qg9ZC2L1yh6Xwdy65qWaxX
          source_id: s_sEY1Suj5vgD7xoGYntU88F
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第六十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sEY1Suj5vgD7xoGYntU88F
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 334276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334276&o=json
            external_identifier: CBDB:334276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.441Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SAm8qh9b4YSVEVKhd8CvU4
        status: active
        display_name: 王祿
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_dhixAaJgh7-lhqKQB9m7c8
        subject_person_id: p_5AAghVGFQgSiJ1wrgd9PyC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FL6Az72NGqaTwTmAdfMBte
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gN3Zeu5n850bPVJJujbsqm
          claim_id: c_dhixAaJgh7-lhqKQB9m7c8
          source_id: s_KnQn5NPWcnMCN-9wys2W8x
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126854 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KnQn5NPWcnMCN-9wys2W8x
            source_type: api_record
            title: 中国历代人物传记资料库：王懋修（CBDB 334284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334284&o=json
            external_identifier: CBDB:334284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5AAghVGFQgSiJ1wrgd9PyC
        status: active
        display_name: 王懋修
        merged_into_person_id: null
    - claim:
        id: c_NoQoYD-6xGrkJtRsBLkN-D
        subject_person_id: p_FL6Az72NGqaTwTmAdfMBte
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GwYfdruF8C5JeHuLHvGeEV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1noJfHtie2k_RI9sAxhcUJ
          claim_id: c_NoQoYD-6xGrkJtRsBLkN-D
          source_id: s_fU9YWU_bH6fx-BQN7_qYzz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126854 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fU9YWU_bH6fx-BQN7_qYzz
            source_type: api_record
            title: 中国历代人物传记资料库：王懋功（CBDB 334282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334282&o=json
            external_identifier: CBDB:334282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GwYfdruF8C5JeHuLHvGeEV
        status: active
        display_name: 王懋功
        merged_into_person_id: null
    - claim:
        id: c_Uxl-LyA7ZHnfOtRUM4bnin
        subject_person_id: p_FL6Az72NGqaTwTmAdfMBte
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ockdWwnfv8UFMyT3oqBGPN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UAZFmr4WAWfzEDyOZNjydn
          claim_id: c_Uxl-LyA7ZHnfOtRUM4bnin
          source_id: s_9jXeCD1FVBonYbTdv0Y_17
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126854 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9jXeCD1FVBonYbTdv0Y_17
            source_type: api_record
            title: 中国历代人物传记资料库：王懋昭（CBDB 334283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334283&o=json
            external_identifier: CBDB:334283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ockdWwnfv8UFMyT3oqBGPN
        status: active
        display_name: 王懋昭
        merged_into_person_id: null
---

# 王懋德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋德 | accepted |
| bio.summary | 王懋德，明人物。明清進士進士，籍贯文昌，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 126854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iK7J2v9nYEqAqfNJHxwFuC | 王良弼 | accepted |
| ancestors | p_DG3mQvkRF6cAieQLfbw7xA | 王賓 | accepted |
| ancestors | p_SAm8qh9b4YSVEVKhd8CvU4 | 王祿 | accepted |
| other | p_5AAghVGFQgSiJ1wrgd9PyC | 王懋修 | accepted |
| other | p_GwYfdruF8C5JeHuLHvGeEV | 王懋功 | accepted |
| other | p_ockdWwnfv8UFMyT3oqBGPN | 王懋昭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 334278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334278&o=json)
- [中国历代人物传记资料库：王良弼（CBDB 334279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334279&o=json)
- [中国历代人物传记资料库：王祿（CBDB 334276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334276&o=json)
- [中国历代人物传记资料库：王懋德（CBDB 126854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126854&o=json)
- [中国历代人物传记资料库：王懋功（CBDB 334282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334282&o=json)
- [中国历代人物传记资料库：王懋修（CBDB 334284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334284&o=json)
- [中国历代人物传记资料库：王懋昭（CBDB 334283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334283&o=json)
