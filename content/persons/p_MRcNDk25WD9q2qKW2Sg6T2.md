---
schema: wang-person/v1
id: p_MRcNDk25WD9q2qKW2Sg6T2
status: active
merged_into: null
display_name: 王誠
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K7xbVvhiTCDbEDECJP34PR
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fnW4qovhQmCe1VWLnw3yKf
          claim_id: c_K7xbVvhiTCDbEDECJP34PR
          source_id: s_5dur9KCoLTcead74DbNpXZ
          stance: supports
          locator: CBDB:696155
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（696155）
          source: &a1
            id: s_5dur9KCoLTcead74DbNpXZ
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 696155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696155&o=json
            external_identifier: CBDB:696155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7p3T28wkUR6KChXsQ1yJpD
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠，宋人物。籍贯上黨。（中国历代人物传记资料库 CBDB 696155）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H-ozwrFczn7HCyiUVLA0DD
          claim_id: c_7p3T28wkUR6KChXsQ1yJpD
          source_id: s_5dur9KCoLTcead74DbNpXZ
          stance: supports
          locator: CBDB:696155
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mYJDy-wlp3l7V-6wYImO9n
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4AFKu7y5cKNe6h7aSeSk26
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZIqfvTnZuXQQ9etFsxWKpf
          claim_id: c_mYJDy-wlp3l7V-6wYImO9n
          source_id: s_v9ruH9BS5qvkvSzL2gx5DB
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王誠墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v9ruH9BS5qvkvSzL2gx5DB
            source_type: api_record
            title: 中国历代人物传记资料库：王婢兒（CBDB 696182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696182&o=json
            external_identifier: CBDB:696182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4AFKu7y5cKNe6h7aSeSk26
        status: active
        display_name: 王婢兒
        merged_into_person_id: null
    - claim:
        id: c_HM96vxIgOpU6vhFoKWNuaf
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AHi7umKiBUo1nUjdKA5yRP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ke6tHi3ChLMciZOOk8Zlwk
          claim_id: c_HM96vxIgOpU6vhFoKWNuaf
          source_id: s_g18wNWhsjfi7DxL8tZgViK
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王誠墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g18wNWhsjfi7DxL8tZgViK
            source_type: api_record
            title: 中国历代人物传记资料库：王用和（CBDB 696168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696168&o=json
            external_identifier: CBDB:696168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AHi7umKiBUo1nUjdKA5yRP
        status: active
        display_name: 王用和
        merged_into_person_id: null
    - claim:
        id: c_1R1QmaHoaa7HnyXC1uqLks
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AMgUPJZ26fDXLPTDXBQofC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9NqA-wjaqWwzXYeTC47XQh
          claim_id: c_1R1QmaHoaa7HnyXC1uqLks
          source_id: s_TnRJUtHSEufTUfLgHb6jUH
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王誠墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TnRJUtHSEufTUfLgHb6jUH
            source_type: api_record
            title: 中国历代人物传记资料库：王三兒（CBDB 696171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696171&o=json
            external_identifier: CBDB:696171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.544Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AMgUPJZ26fDXLPTDXBQofC
        status: active
        display_name: 王三兒
        merged_into_person_id: null
    - claim:
        id: c_xbm5aAToRSg7PE5x2PD32E
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nRcMz2seT6EHfF2neQtxKh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9-Haq_0XaX7xyqArBKEAA6
          claim_id: c_xbm5aAToRSg7PE5x2PD32E
          source_id: s_b8x7t32mtUK5habPXcFPNA
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王誠墓誌：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_b8x7t32mtUK5habPXcFPNA
            source_type: api_record
            title: 中国历代人物传记资料库：王五兒（CBDB 696169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696169&o=json
            external_identifier: CBDB:696169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.543Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nRcMz2seT6EHfF2neQtxKh
        status: active
        display_name: 王五兒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_lSs0oYyP-ukTmpxss3WSOe
        subject_person_id: p_93knEVXDHk5dRYRuf8P4GQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e360_PucLWMl0u57r9CAqE
          claim_id: c_lSs0oYyP-ukTmpxss3WSOe
          source_id: s_jK7td8gv5mcoMZA6GCyUx5
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王誠墓誌：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jK7td8gv5mcoMZA6GCyUx5
            source_type: api_record
            title: 中国历代人物传记资料库：王某贊（CBDB 696158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696158&o=json
            external_identifier: CBDB:696158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_93knEVXDHk5dRYRuf8P4GQ
        status: active
        display_name: 王某贊
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_J1YQQ5uqMbgdQWK4oXmN9P
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ATA13cPezR7oDEojWMksBV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_azfBl64G3kS5XV18HpS8bW
          claim_id: c_J1YQQ5uqMbgdQWK4oXmN9P
          source_id: s_MYHijeX97VAuPnNToHLYCM
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王誠墓誌：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MYHijeX97VAuPnNToHLYCM
            source_type: api_record
            title: 中国历代人物传记资料库：王翁怜（CBDB 696189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696189&o=json
            external_identifier: CBDB:696189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ATA13cPezR7oDEojWMksBV
        status: active
        display_name: 王翁怜
        merged_into_person_id: null
    - claim:
        id: c_CC1sriEechWur5eGaSV-qj
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uPSpJEuAvvHGuLtXwodH7m
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QPx8sVA_jNJxBlJ3f7NZjj
          claim_id: c_CC1sriEechWur5eGaSV-qj
          source_id: s_Gi3iqCqDJKFUj6RDVyAdrs
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，王誠墓誌：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Gi3iqCqDJKFUj6RDVyAdrs
            source_type: api_record
            title: 中国历代人物传记资料库：王韓留（CBDB 696193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696193&o=json
            external_identifier: CBDB:696193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uPSpJEuAvvHGuLtXwodH7m
        status: active
        display_name: 王韓留
        merged_into_person_id: null
  other:
    - claim:
        id: c_vxQBCrL_NTghM6F36n88My
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MfuJvBCLAoVuv41EkHWqmH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pk-hHmCD5e-1HuyW_acEj-
          claim_id: c_vxQBCrL_NTghM6F36n88My
          source_id: s_o-YySgW_mt_g25krZ3cWIx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 696155 王誠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_o-YySgW_mt_g25krZ3cWIx
            source_type: api_record
            title: 中国历代人物传记资料库：王某秘（CBDB 696162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696162&o=json
            external_identifier: CBDB:696162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MfuJvBCLAoVuv41EkHWqmH
        status: active
        display_name: 王某秘
        merged_into_person_id: null
    - claim:
        id: c_u0ptFEf114RPpjtdOprEm5
        subject_person_id: p_MRcNDk25WD9q2qKW2Sg6T2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cqZvbkJa9N1EqAvPNJc3zJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O8gEsbU55HmfGFIbKYTRCH
          claim_id: c_u0ptFEf114RPpjtdOprEm5
          source_id: s_e4cbQmBsj08C-UoDC8bweL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 696155 王誠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_e4cbQmBsj08C-UoDC8bweL
            source_type: api_record
            title: 中国历代人物传记资料库：王文禧（CBDB 696163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696163&o=json
            external_identifier: CBDB:696163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cqZvbkJa9N1EqAvPNJc3zJ
        status: active
        display_name: 王文禧
        merged_into_person_id: null
---

# 王誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誠 | accepted |
| bio.summary | 王誠，宋人物。籍贯上黨。（中国历代人物传记资料库 CBDB 696155） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4AFKu7y5cKNe6h7aSeSk26 | 王婢兒 | accepted |
| children | p_AHi7umKiBUo1nUjdKA5yRP | 王用和 | accepted |
| children | p_AMgUPJZ26fDXLPTDXBQofC | 王三兒 | accepted |
| children | p_nRcMz2seT6EHfF2neQtxKh | 王五兒 | accepted |
| ancestors | p_93knEVXDHk5dRYRuf8P4GQ | 王某贊 | accepted |
| descendants | p_ATA13cPezR7oDEojWMksBV | 王翁怜 | accepted |
| descendants | p_uPSpJEuAvvHGuLtXwodH7m | 王韓留 | accepted |
| other | p_MfuJvBCLAoVuv41EkHWqmH | 王某秘 | accepted |
| other | p_cqZvbkJa9N1EqAvPNJc3zJ | 王文禧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王婢兒（CBDB 696182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696182&o=json)
- [中国历代人物传记资料库：王誠（CBDB 696155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696155&o=json)
- [中国历代人物传记资料库：王韓留（CBDB 696193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696193&o=json)
- [中国历代人物传记资料库：王某秘（CBDB 696162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696162&o=json)
- [中国历代人物传记资料库：王某贊（CBDB 696158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696158&o=json)
- [中国历代人物传记资料库：王三兒（CBDB 696171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696171&o=json)
- [中国历代人物传记资料库：王文禧（CBDB 696163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696163&o=json)
- [中国历代人物传记资料库：王翁怜（CBDB 696189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696189&o=json)
- [中国历代人物传记资料库：王五兒（CBDB 696169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696169&o=json)
- [中国历代人物传记资料库：王用和（CBDB 696168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=696168&o=json)
