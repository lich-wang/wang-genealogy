---
schema: wang-person/v1
id: p_TTntK269568eA9RALQmA43
status: active
merged_into: null
display_name: 王納言
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ej9VMFFQGjut4J7TwmHboE
        subject_person_id: p_TTntK269568eA9RALQmA43
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2B7AerTxN2f7KhTNC6EGjq
          claim_id: c_Ej9VMFFQGjut4J7TwmHboE
          source_id: s_aTLSrYZ8FAxY6igyweBs3N
          stance: supports
          locator: CBDB:68459
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68459）
          source: &a1
            id: s_aTLSrYZ8FAxY6igyweBs3N
            source_type: api_record
            title: 中国历代人物传记资料库：王納言（CBDB 68459）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68459&o=json
            external_identifier: CBDB:68459
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h8KtT94FnL1y4GEuHm2Caj
        subject_person_id: p_TTntK269568eA9RALQmA43
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納言，明人物。明清進士進士，籍贯信陽，入仕進士，曾任參知政事、分巡道、府通判。（中国历代人物传记资料库 CBDB 68459）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9Nys1f8hgayff2TO-4y2bV
          claim_id: c_h8KtT94FnL1y4GEuHm2Caj
          source_id: s_aTLSrYZ8FAxY6igyweBs3N
          stance: supports
          locator: CBDB:68459
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SItaAQDQCEo-vRa5EB8LZb
        subject_person_id: p_enQPN3zVXFi7qM1WJLyJty
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TTntK269568eA9RALQmA43
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E65I1rEbSwWRvIxr4jXfET
          claim_id: c_SItaAQDQCEo-vRa5EB8LZb
          source_id: s_g7XW5CaMVygR9LNxD68Hvg
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第八十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g7XW5CaMVygR9LNxD68Hvg
            source_type: api_record
            title: 中国历代人物传记资料库：王汝楫（CBDB 288211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288211&o=json
            external_identifier: CBDB:288211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_enQPN3zVXFi7qM1WJLyJty
        status: active
        display_name: 王汝楫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_e1v-mbd6OLDjiFPGO2DsPQ
        subject_person_id: p_jeL1MqkEmjhjcF65DnMTWB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TTntK269568eA9RALQmA43
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p7PxBCDvk0WtmSkZq6DbmP
          claim_id: c_e1v-mbd6OLDjiFPGO2DsPQ
          source_id: s_swifxK2L5m9nN2MegYCQAr
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第八十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_swifxK2L5m9nN2MegYCQAr
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 288209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288209&o=json
            external_identifier: CBDB:288209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jeL1MqkEmjhjcF65DnMTWB
        status: active
        display_name: 王貴
        merged_into_person_id: null
    - claim:
        id: c_K7vLr6eeuB836PmyMTEgWn
        subject_person_id: p_YSizN5rYhecGjWP9L8nz3d
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TTntK269568eA9RALQmA43
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OaSnOviX5beUCuof9kyXiK
          claim_id: c_K7vLr6eeuB836PmyMTEgWn
          source_id: s_d4U2Vd6pKDuGz5rpAB84y4
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第二甲第八十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_d4U2Vd6pKDuGz5rpAB84y4
            source_type: api_record
            title: 中国历代人物传记资料库：王輪（CBDB 288210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288210&o=json
            external_identifier: CBDB:288210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.286Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YSizN5rYhecGjWP9L8nz3d
        status: active
        display_name: 王輪
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_zixTncPXWuwxU5uUvSMc50
        subject_person_id: p_TTntK269568eA9RALQmA43
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1D9UJ3qbxhZuhm9688Gxjt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LommJFJOQhI6Nm135v00jh
          claim_id: c_zixTncPXWuwxU5uUvSMc50
          source_id: s_8mb74tFPKTmL3GwfEttLm6
          stance: supports
          locator: (乾隆)信陽州志，lgid=868515：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8mb74tFPKTmL3GwfEttLm6
            source_type: api_record
            title: 中国历代人物传记资料库：王嗣祖（CBDB 557424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557424&o=json
            external_identifier: CBDB:557424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1D9UJ3qbxhZuhm9688Gxjt
        status: active
        display_name: 王嗣祖
        merged_into_person_id: null
    - claim:
        id: c_oAxusOpjwzl-lWPxJY0U-1
        subject_person_id: p_TTntK269568eA9RALQmA43
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gT8Y6oM2Xv4kiuH3CHGLND
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HXRLp8Qq1BucnggJsdyeoz
          claim_id: c_oAxusOpjwzl-lWPxJY0U-1
          source_id: s_Dr52erix2DMGC8vWV9VsED
          stance: supports
          locator: (乾隆)信陽州志，lgid=868515：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Dr52erix2DMGC8vWV9VsED
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳徵（CBDB 557421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557421&o=json
            external_identifier: CBDB:557421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gT8Y6oM2Xv4kiuH3CHGLND
        status: active
        display_name: 王鳳徵
        merged_into_person_id: null
  other:
    - claim:
        id: c_arTsFaxEHrogqe9ICpvzDF
        subject_person_id: p_6ztBg2EgJwXATmnfE6XEgT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TTntK269568eA9RALQmA43
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bOZHxbiHbn5H1mmN4WwTy8
          claim_id: c_arTsFaxEHrogqe9ICpvzDF
          source_id: s_upzvJwWKbCC05rtwN3AfyE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68459 王納言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_upzvJwWKbCC05rtwN3AfyE
            source_type: api_record
            title: 中国历代人物传记资料库：王納謨（CBDB 288217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288217&o=json
            external_identifier: CBDB:288217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6ztBg2EgJwXATmnfE6XEgT
        status: active
        display_name: 王納謨
        merged_into_person_id: null
    - claim:
        id: c_q05eUEk3GSLsxVnP4krkt5
        subject_person_id: p_8Sp1kg55E8GaHteMGLQNA8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TTntK269568eA9RALQmA43
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MTNiYK1aAN812r4N-GJvLK
          claim_id: c_q05eUEk3GSLsxVnP4krkt5
          source_id: s_ZXQ8OVVQ9GafszhoqS2_tI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68459 王納言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZXQ8OVVQ9GafszhoqS2_tI
            source_type: api_record
            title: 中国历代人物传记资料库：王納諫（CBDB 288216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288216&o=json
            external_identifier: CBDB:288216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8Sp1kg55E8GaHteMGLQNA8
        status: active
        display_name: 王納諫
        merged_into_person_id: null
    - claim:
        id: c_czAQD5LAHBXLJ8mori31W_
        subject_person_id: p_TTntK269568eA9RALQmA43
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_U3pj5GzZLQGz1yWYaMs4YU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-pj1h7LdYmV0qnCKYRM7Uc
          claim_id: c_czAQD5LAHBXLJ8mori31W_
          source_id: s_iwtxCF2o5sQ9JBUffppZj8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68459 王納言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iwtxCF2o5sQ9JBUffppZj8
            source_type: api_record
            title: 中国历代人物传记资料库：王納訓（CBDB 288218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288218&o=json
            external_identifier: CBDB:288218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U3pj5GzZLQGz1yWYaMs4YU
        status: active
        display_name: 王納訓
        merged_into_person_id: null
---

# 王納言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納言 | accepted |
| bio.summary | 王納言，明人物。明清進士進士，籍贯信陽，入仕進士，曾任參知政事、分巡道、府通判。（中国历代人物传记资料库 CBDB 68459） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_enQPN3zVXFi7qM1WJLyJty | 王汝楫 | accepted |
| ancestors | p_jeL1MqkEmjhjcF65DnMTWB | 王貴 | accepted |
| ancestors | p_YSizN5rYhecGjWP9L8nz3d | 王輪 | accepted |
| descendants | p_1D9UJ3qbxhZuhm9688Gxjt | 王嗣祖 | accepted |
| descendants | p_gT8Y6oM2Xv4kiuH3CHGLND | 王鳳徵 | accepted |
| other | p_6ztBg2EgJwXATmnfE6XEgT | 王納謨 | accepted |
| other | p_8Sp1kg55E8GaHteMGLQNA8 | 王納諫 | accepted |
| other | p_U3pj5GzZLQGz1yWYaMs4YU | 王納訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳徵（CBDB 557421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557421&o=json)
- [中国历代人物传记资料库：王貴（CBDB 288209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288209&o=json)
- [中国历代人物传记资料库：王輪（CBDB 288210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288210&o=json)
- [中国历代人物传记资料库：王納諫（CBDB 288216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288216&o=json)
- [中国历代人物传记资料库：王納謨（CBDB 288217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288217&o=json)
- [中国历代人物传记资料库：王納訓（CBDB 288218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288218&o=json)
- [中国历代人物传记资料库：王納言（CBDB 68459）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68459&o=json)
- [中国历代人物传记资料库：王汝楫（CBDB 288211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288211&o=json)
- [中国历代人物传记资料库：王嗣祖（CBDB 557424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557424&o=json)
