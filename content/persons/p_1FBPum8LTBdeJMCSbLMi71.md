---
schema: wang-person/v1
id: p_1FBPum8LTBdeJMCSbLMi71
status: active
merged_into: null
display_name: 王曰可
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5H1LitL8wA4xN5ac9mK6sb
        subject_person_id: p_1FBPum8LTBdeJMCSbLMi71
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰可
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aWkxF78Y4ittFKdaow8FMC
          claim_id: c_5H1LitL8wA4xN5ac9mK6sb
          source_id: s_Ew3yKZ6g5wxDGR12BzttQa
          stance: supports
          locator: CBDB:214227
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214227）
          source: &a1
            id: s_Ew3yKZ6g5wxDGR12BzttQa
            source_type: api_record
            title: 中国历代人物传记资料库：王曰可（CBDB 214227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214227&o=json
            external_identifier: CBDB:214227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.148Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZA3b5cKeEb85Ui7bNU1MXT
        subject_person_id: p_1FBPum8LTBdeJMCSbLMi71
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰可，明人物。萬曆二年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 214227）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-YkA3jk3v4wteV-GaZDWqg
          claim_id: c_ZA3b5cKeEb85Ui7bNU1MXT
          source_id: s_Ew3yKZ6g5wxDGR12BzttQa
          stance: supports
          locator: CBDB:214227
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9fA9nAOnpYu3dex-JH07Lw
        subject_person_id: p_1FBPum8LTBdeJMCSbLMi71
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gQ7de4k3fPsZaTDKaE81D5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cJKzNDS84LDvavmkyUbU2g
          claim_id: c_9fA9nAOnpYu3dex-JH07Lw
          source_id: s_Ew3yKZ6g5wxDGR12BzttQa
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百零五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gQ7de4k3fPsZaTDKaE81D5
        status: active
        display_name: 王三宅
        merged_into_person_id: null
    - claim:
        id: c_iBcpd_5qu3ZF0PNrt2eZh3
        subject_person_id: p_1FBPum8LTBdeJMCSbLMi71
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_96x8osCh45czZNDmiDiBvr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ptCzqPFnQerecn5eT4iTCy
          claim_id: c_iBcpd_5qu3ZF0PNrt2eZh3
          source_id: s_qvr-Fk0SWrJTfQOnCFEKtN
          stance: supports
          locator: CBDB：兄弟 王三宅（126449）之父／母 王曰可
          quotation: null
          interpretation_note: 由兄弟关系推断：王三槐 与 王三宅 为同胞（CBDB 记「兄」），王三宅 之父／母即 王三槐 之父／母。
          source:
            id: s_qvr-Fk0SWrJTfQOnCFEKtN
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 214234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214234&o=json
            external_identifier: CBDB:214234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_96x8osCh45czZNDmiDiBvr
        status: active
        display_name: 王三槐
        merged_into_person_id: null
    - claim:
        id: c_8VjipAEB45xRJlVdRBjup3
        subject_person_id: p_1FBPum8LTBdeJMCSbLMi71
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9Gm1f56KyrWEn2aB7sVECT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HV_Y7u5AHMgA8g8dG1Fu6D
          claim_id: c_8VjipAEB45xRJlVdRBjup3
          source_id: s_voaWn3Iqgywn04EV5jcWBj
          stance: supports
          locator: CBDB：兄弟 王三宅（126449）之父／母 王曰可
          quotation: null
          interpretation_note: 由兄弟关系推断：王三俊 与 王三宅 为同胞（CBDB 记「兄」），王三宅 之父／母即 王三俊 之父／母。
          source:
            id: s_voaWn3Iqgywn04EV5jcWBj
            source_type: api_record
            title: 中国历代人物传记资料库：王三俊（CBDB 214232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214232&o=json
            external_identifier: CBDB:214232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9Gm1f56KyrWEn2aB7sVECT
        status: active
        display_name: 王三俊
        merged_into_person_id: null
    - claim:
        id: c_MpBdTtuUFN0eGzik6J6NpN
        subject_person_id: p_1FBPum8LTBdeJMCSbLMi71
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MBFdtrDNAYkH8oAGu64ATb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rdskl9WExZ43qd5pUbHWZE
          claim_id: c_MpBdTtuUFN0eGzik6J6NpN
          source_id: s_5cwOU3n8JsLK7AbfGaHl97
          stance: supports
          locator: CBDB：兄弟 王三宅（126449）之父／母 王曰可
          quotation: null
          interpretation_note: 由兄弟关系推断：王三才 与 王三宅 为同胞（CBDB 记「兄」），王三宅 之父／母即 王三才 之父／母。
          source:
            id: s_5cwOU3n8JsLK7AbfGaHl97
            source_type: api_record
            title: 中国历代人物传记资料库：王三才（CBDB 214235）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214235&o=json
            external_identifier: CBDB:214235
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MBFdtrDNAYkH8oAGu64ATb
        status: active
        display_name: 王三才
        merged_into_person_id: null
    - claim:
        id: c_V7ATGAv5DhVz0VD5bAFdTU
        subject_person_id: p_1FBPum8LTBdeJMCSbLMi71
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y4QjL7zfkyuESS1dmfnbuf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yZi-XcXbIAU_gBNDexypVd
          claim_id: c_V7ATGAv5DhVz0VD5bAFdTU
          source_id: s__BRueCvkxmqtvmfal7RpDv
          stance: supports
          locator: CBDB：兄弟 王三宅（126449）之父／母 王曰可
          quotation: null
          interpretation_note: 由兄弟关系推断：王三策 与 王三宅 为同胞（CBDB 记「兄」），王三宅 之父／母即 王三策 之父／母。
          source:
            id: s__BRueCvkxmqtvmfal7RpDv
            source_type: api_record
            title: 中国历代人物传记资料库：王三策（CBDB 214236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214236&o=json
            external_identifier: CBDB:214236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y4QjL7zfkyuESS1dmfnbuf
        status: active
        display_name: 王三策
        merged_into_person_id: null
    - claim:
        id: c_bQp7LOsgY4KGrC7ALruoEG
        subject_person_id: p_1FBPum8LTBdeJMCSbLMi71
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qoah7FrZ6mu7Xy35XdosAz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nD5KZgGBn6h0DhbJtDKM35
          claim_id: c_bQp7LOsgY4KGrC7ALruoEG
          source_id: s_F79AB6XWZnOv2eMD_5Af6y
          stance: supports
          locator: CBDB：兄弟 王三宅（126449）之父／母 王曰可
          quotation: null
          interpretation_note: 由兄弟关系推断：王三錫 与 王三宅 为同胞（CBDB 记「兄」），王三宅 之父／母即 王三錫 之父／母。
          source:
            id: s_F79AB6XWZnOv2eMD_5Af6y
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 214233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214233&o=json
            external_identifier: CBDB:214233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qoah7FrZ6mu7Xy35XdosAz
        status: active
        display_name: 王三錫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王曰可

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曰可 | accepted |
| bio.summary | 王曰可，明人物。萬曆二年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 214227） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_gQ7de4k3fPsZaTDKaE81D5 | 王三宅 | accepted |
| children | p_96x8osCh45czZNDmiDiBvr | 王三槐 | accepted |
| children | p_9Gm1f56KyrWEn2aB7sVECT | 王三俊 | accepted |
| children | p_MBFdtrDNAYkH8oAGu64ATb | 王三才 | accepted |
| children | p_Y4QjL7zfkyuESS1dmfnbuf | 王三策 | accepted |
| children | p_qoah7FrZ6mu7Xy35XdosAz | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三才（CBDB 214235）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214235&o=json)
- [中国历代人物传记资料库：王三策（CBDB 214236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214236&o=json)
- [中国历代人物传记资料库：王三槐（CBDB 214234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214234&o=json)
- [中国历代人物传记资料库：王三俊（CBDB 214232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214232&o=json)
- [中国历代人物传记资料库：王三錫（CBDB 214233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214233&o=json)
- [中国历代人物传记资料库：王曰可（CBDB 214227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214227&o=json)
