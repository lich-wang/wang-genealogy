---
schema: wang-person/v1
id: p_v7QTG8DDAv27Aki2Sqpnvw
status: active
merged_into: null
display_name: 王問卿
cbdb_id: 206092
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_13siCSp2gGWKMQjf91ZY8W
        subject_person_id: p_v7QTG8DDAv27Aki2Sqpnvw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問卿（生于1547年），明人物。明清進士進士，籍贯長洲，入仕進士。（中国历代人物传记资料库 CBDB 206092）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QU5EDFUtUucjqApkWjB7jq
          claim_id: c_13siCSp2gGWKMQjf91ZY8W
          source_id: s_62QKexbZJPsc7BhgVHM1U6
          stance: supports
          locator: CBDB:206092
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_62QKexbZJPsc7BhgVHM1U6
            source_type: api_record
            title: 中国历代人物传记资料库：王問卿（CBDB 206092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206092&o=json
            external_identifier: CBDB:206092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QcF5gGbx42uffC5x9pbhtE
        subject_person_id: p_v7QTG8DDAv27Aki2Sqpnvw
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1547年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1547-01-01
            latest: 1547-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Dot5KusuZTVV6CyaZbot23
          claim_id: c_QcF5gGbx42uffC5x9pbhtE
          source_id: s_62QKexbZJPsc7BhgVHM1U6
          stance: supports
          locator: CBDB:206092
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1547
          source:
            id: s_62QKexbZJPsc7BhgVHM1U6
            source_type: api_record
            title: 中国历代人物传记资料库：王問卿（CBDB 206092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206092&o=json
            external_identifier: CBDB:206092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_a8m4aL2MteUmdPJw589uJ5
        subject_person_id: p_v7QTG8DDAv27Aki2Sqpnvw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1Aq6yn7jDeMxYzFP2v1iDE
          claim_id: c_a8m4aL2MteUmdPJw589uJ5
          source_id: s_62QKexbZJPsc7BhgVHM1U6
          stance: supports
          locator: CBDB:206092
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1547
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_L5WOaYm1xQcbfOVzQSl9-a
        subject_person_id: p_LMXRCBjsfzMqaRuKsJc8Wx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_v7QTG8DDAv27Aki2Sqpnvw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5TirH8Xhthe5OfN8szaPtV
          claim_id: c_L5WOaYm1xQcbfOVzQSl9-a
          source_id: s_h4fb8hebaSCF7ivWsq6wnS
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_h4fb8hebaSCF7ivWsq6wnS
            source_type: api_record
            title: 中国历代人物传记资料库：王津（CBDB 213202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213202&o=json
            external_identifier: CBDB:213202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.108Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LMXRCBjsfzMqaRuKsJc8Wx
        status: active
        display_name: 王津
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_8f668cvn_9h55XyrgURszA
        subject_person_id: p_H1CHec8WiEP6udv6HsGiK6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_v7QTG8DDAv27Aki2Sqpnvw
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o6jJRAaiVDnsRy0jA8qyDg
          claim_id: c_8f668cvn_9h55XyrgURszA
          source_id: s_zZRkBDi4jR2qezi4UwirP4
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zZRkBDi4jR2qezi4UwirP4
            source_type: api_record
            title: 中国历代人物传记资料库：王纓（CBDB 213201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213201&o=json
            external_identifier: CBDB:213201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H1CHec8WiEP6udv6HsGiK6
        status: active
        display_name: 王纓
        merged_into_person_id: null
    - claim:
        id: c_nyVt-5MIi__VOpx0gyYh6F
        subject_person_id: p_szikNd5ySGJKY1x1ci7vgq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_v7QTG8DDAv27Aki2Sqpnvw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gJFCTx1vJucN98C-uN2R4b
          claim_id: c_nyVt-5MIi__VOpx0gyYh6F
          source_id: s_1qXUwH2gVM19maxwm28Ayn
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1qXUwH2gVM19maxwm28Ayn
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 213200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213200&o=json
            external_identifier: CBDB:213200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.106Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_szikNd5ySGJKY1x1ci7vgq
        status: active
        display_name: 王珩
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王問卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王問卿（生于1547年），明人物。明清進士進士，籍贯長洲，入仕進士。（中国历代人物传记资料库 CBDB 206092） | accepted |
| birth.date | 1547年 | accepted |
| name.primary | 王問卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LMXRCBjsfzMqaRuKsJc8Wx | 王津 | accepted |
| ancestors | p_H1CHec8WiEP6udv6HsGiK6 | 王纓 | accepted |
| ancestors | p_szikNd5ySGJKY1x1ci7vgq | 王珩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珩（CBDB 213200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213200&o=json)
- [中国历代人物传记资料库：王津（CBDB 213202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213202&o=json)
- [中国历代人物传记资料库：王問卿（CBDB 206092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206092&o=json)
- [中国历代人物传记资料库：王纓（CBDB 213201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213201&o=json)
