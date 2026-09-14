---
schema: wang-person/v1
id: p_BNDHcwrQU46tvDsz7UJKUr
status: active
merged_into: null
display_name: 王璽
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wyLeXEjYnKGr4CuMuxhVRj
        subject_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9RAcXxoAGW9TH86SPeXQdm
          claim_id: c_wyLeXEjYnKGr4CuMuxhVRj
          source_id: s_LGyeE5TDnWyhmnVTgaqgAC
          stance: supports
          locator: CBDB:201213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201213）
          source: &a1
            id: s_LGyeE5TDnWyhmnVTgaqgAC
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 201213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201213&o=json
            external_identifier: CBDB:201213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mJUHueQNbP7YVW7K8aK5Ts
        subject_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1460年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KJLFCiZ443Bxfep8CY9WFZ
          claim_id: c_mJUHueQNbP7YVW7K8aK5Ts
          source_id: s_LGyeE5TDnWyhmnVTgaqgAC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WDTq4MGWAHr5cAFkFAru9T
        subject_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽（生于1460年），明人物。弘治九年進士，籍贯廬陵，入仕進士，曾任知縣、知州。（中国历代人物传记资料库 CBDB 201213）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S_gtI7rzn2FTglcPjmdj57
          claim_id: c_WDTq4MGWAHr5cAFkFAru9T
          source_id: s_LGyeE5TDnWyhmnVTgaqgAC
          stance: supports
          locator: CBDB:201213
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4fSARp_BbHd9vvUXfvcDrI
        subject_person_id: p_uFwD6xBc7pcKYRU4SJgBny
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0fzeytyLfMmtGc7jfOH8dX
          claim_id: c_4fSARp_BbHd9vvUXfvcDrI
          source_id: s_LGyeE5TDnWyhmnVTgaqgAC
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百一十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uFwD6xBc7pcKYRU4SJgBny
        status: active
        display_name: 王萬悅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_EuDhep_pn5bpNpObCFCNiD
        subject_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_n6x39QVejBjQcHNzx9z2ru
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g9UwGhNM7vk8a0k9MUxTh7
          claim_id: c_EuDhep_pn5bpNpObCFCNiD
          source_id: s_ZmmPdR3tutk4mkdCs7cA4H
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百一十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZmmPdR3tutk4mkdCs7cA4H
            source_type: api_record
            title: 中国历代人物传记资料库：康氏(王璽妻)（CBDB 268921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268921&o=json
            external_identifier: CBDB:268921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_n6x39QVejBjQcHNzx9z2ru
        status: active
        display_name: 康氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_TTJxIAX2wLqEI_MsDiL0zq
        subject_person_id: p_k8HuKiS8fiU1EwD3GHzVjc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZzAzF7wPAysoqfrOIqcoAa
          claim_id: c_TTJxIAX2wLqEI_MsDiL0zq
          source_id: s_LGyeE5TDnWyhmnVTgaqgAC
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百一十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_k8HuKiS8fiU1EwD3GHzVjc
        status: active
        display_name: 王子完
        merged_into_person_id: null
    - claim:
        id: c_JWoKvLJovsLt3EyHsaNgyN
        subject_person_id: p_E2rBbuizHNK8QeP8wk5K9a
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qFRgEplOMwe9d1Oi8FZwYR
          claim_id: c_JWoKvLJovsLt3EyHsaNgyN
          source_id: s_LGyeE5TDnWyhmnVTgaqgAC
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百一十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E2rBbuizHNK8QeP8wk5K9a
        status: active
        display_name: 王彥全
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_CALKQ4QyAIvaqH4f-uYEjL
        subject_person_id: p_33j9uQiGD4MQDenFMrKYdL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tinSGHVqltgFcUKn7lXEmz
          claim_id: c_CALKQ4QyAIvaqH4f-uYEjL
          source_id: s_P-RJEFC2lRPdlPA_mgnOMZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201213 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_P-RJEFC2lRPdlPA_mgnOMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑬（CBDB 268923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268923&o=json
            external_identifier: CBDB:268923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_33j9uQiGD4MQDenFMrKYdL
        status: active
        display_name: 王瑬
        merged_into_person_id: null
    - claim:
        id: c_8XsuOiiM2uI_6jpC0enC4m
        subject_person_id: p_5KK47qSrMbyEx7ctY3vj7c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YCTvGbtCHd5QP7JJolqVlF
          claim_id: c_8XsuOiiM2uI_6jpC0enC4m
          source_id: s_a-YzOZviHM_ahcbSF5Hz5m
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201213 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_a-YzOZviHM_ahcbSF5Hz5m
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 268926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268926&o=json
            external_identifier: CBDB:268926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5KK47qSrMbyEx7ctY3vj7c
        status: active
        display_name: 王瑩
        merged_into_person_id: null
    - claim:
        id: c_ieaTGc7_6OPLiSzcTATwbf
        subject_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NJTzSodDAYAt4B2JFu3oGY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WAiBgDmIq2Ik9HKYwMb-cN
          claim_id: c_ieaTGc7_6OPLiSzcTATwbf
          source_id: s_4r3kHzJbR_xp7Xj7QHUyyJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201213 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4r3kHzJbR_xp7Xj7QHUyyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王璗（CBDB 268925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268925&o=json
            external_identifier: CBDB:268925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NJTzSodDAYAt4B2JFu3oGY
        status: active
        display_name: 王璗
        merged_into_person_id: null
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| birth.date | 1460年 | accepted |
| bio.summary | 王璽（生于1460年），明人物。弘治九年進士，籍贯廬陵，入仕進士，曾任知縣、知州。（中国历代人物传记资料库 CBDB 201213） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uFwD6xBc7pcKYRU4SJgBny | 王萬悅 | accepted |
| spouses | p_n6x39QVejBjQcHNzx9z2ru | 康氏 | accepted |
| ancestors | p_k8HuKiS8fiU1EwD3GHzVjc | 王子完 | accepted |
| ancestors | p_E2rBbuizHNK8QeP8wk5K9a | 王彥全 | accepted |
| other | p_33j9uQiGD4MQDenFMrKYdL | 王瑬 | accepted |
| other | p_5KK47qSrMbyEx7ctY3vj7c | 王瑩 | accepted |
| other | p_NJTzSodDAYAt4B2JFu3oGY | 王璗 | accepted |

## 外部来源

- [中国历代人物传记资料库：康氏(王璽妻)（CBDB 268921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268921&o=json)
- [中国历代人物传记资料库：王璗（CBDB 268925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268925&o=json)
- [中国历代人物传记资料库：王瑬（CBDB 268923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268923&o=json)
- [中国历代人物传记资料库：王璽（CBDB 201213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201213&o=json)
- [中国历代人物传记资料库：王瑩（CBDB 268926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268926&o=json)
