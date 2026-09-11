---
schema: wang-person/v1
id: p_pv2pDE9A1jj2uMGHCGpC7T
status: active
merged_into: null
display_name: 王廷
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7d6dRxaDKog4FgR5UoTs8m
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E3K6YUE2kLrxomSr3rfsZY
          claim_id: c_7d6dRxaDKog4FgR5UoTs8m
          source_id: s_gNxG6LoadbE6BqckR2GKJ9
          stance: supports
          locator: CBDB:69148
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69148）
          source: &a1
            id: s_gNxG6LoadbE6BqckR2GKJ9
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 69148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69148&o=json
            external_identifier: CBDB:69148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wHwDouyfF9NADqrg2TzmGR
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1589年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FyWMg4NkcnDVrkXMJke9K9
          claim_id: c_wHwDouyfF9NADqrg2TzmGR
          source_id: s_gNxG6LoadbE6BqckR2GKJ9
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
        id: c_EuRFsYZhNAZeD8PXGXhzS1
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N4HWqgCc9fTXoMjLy8zLLk
          claim_id: c_EuRFsYZhNAZeD8PXGXhzS1
          source_id: s_gNxG6LoadbE6BqckR2GKJ9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SAq00vkjeQ3LjQdsD9jVkr
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tf_N6S-JbExOFrEBhbss55
          claim_id: c_SAq00vkjeQ3LjQdsD9jVkr
          source_id: s_FrwWZRDBNt6pNGFBizNerf
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FrwWZRDBNt6pNGFBizNerf
            source_type: api_record
            title: 中国历代人物传记资料库：王希文（CBDB 209884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209884&o=json
            external_identifier: CBDB:209884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N7qE8Uar4CzK9TTK6UVM28
        status: active
        display_name: 王希文
        merged_into_person_id: null
  children:
    - claim:
        id: c_3kcCNHi3zmA6_NKyCirGNk
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_56nMpgobEseCZRMmEFRumw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bgozAdy9HPRxYj9gR0RsZ9
          claim_id: c_3kcCNHi3zmA6_NKyCirGNk
          source_id: s_n3PVAp7p3NaZiZLgN6nEHs
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n3PVAp7p3NaZiZLgN6nEHs
            source_type: api_record
            title: 中国历代人物传记资料库：王續之（CBDB 290827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290827&o=json
            external_identifier: CBDB:290827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_56nMpgobEseCZRMmEFRumw
        status: active
        display_name: 王續之
        merged_into_person_id: null
    - claim:
        id: c_vPfTpQQ8naXBUC-ckCgnQ7
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gq24SpR1JwxAtM1Y4bPKFh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHCRiX6TkizL4An2OuSayK
          claim_id: c_vPfTpQQ8naXBUC-ckCgnQ7
          source_id: s_cSaQKEBPtqnM6TA1H5wCvx
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cSaQKEBPtqnM6TA1H5wCvx
            source_type: api_record
            title: 中国历代人物传记资料库：王繼之（CBDB 290828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290828&o=json
            external_identifier: CBDB:290828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Gq24SpR1JwxAtM1Y4bPKFh
        status: active
        display_name: 王繼之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_s36NOFEQu6lf4Sx_6e0Um9
        subject_person_id: p_6AWFkDwvMEx3gmWMnZMPwe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_scV3fKCNzuQtMWFnLNf0ZD
          claim_id: c_s36NOFEQu6lf4Sx_6e0Um9
          source_id: s_SUs9UsZEYNukhuLWGV3uqc
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SUs9UsZEYNukhuLWGV3uqc
            source_type: api_record
            title: 中国历代人物传记资料库：王昺（CBDB 209880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209880&o=json
            external_identifier: CBDB:209880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6AWFkDwvMEx3gmWMnZMPwe
        status: active
        display_name: 王昺
        merged_into_person_id: null
    - claim:
        id: c_4cwfY278ymMQr5pQJ38glm
        subject_person_id: p_maPAMJTQdq43e6ioGBHvAp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xc50toASkREYQf0e3zqqR_
          claim_id: c_4cwfY278ymMQr5pQJ38glm
          source_id: s_2bwTHh7pjo3u8arjnn6DiE
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2bwTHh7pjo3u8arjnn6DiE
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 290805）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290805&o=json
            external_identifier: CBDB:290805
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_maPAMJTQdq43e6ioGBHvAp
        status: active
        display_name: 王銳
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_MNMYOtVVXRQ3-XrkW3fPFk
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8WqY814yTSDVKdHuN73Emp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TZPA520tnmkZvQwCJcPNI3
          claim_id: c_MNMYOtVVXRQ3-XrkW3fPFk
          source_id: s_35Yxqty3QrBk1ZEWQwsdsZ
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_35Yxqty3QrBk1ZEWQwsdsZ
            source_type: api_record
            title: 中国历代人物传记资料库：王兆麟（CBDB 290832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290832&o=json
            external_identifier: CBDB:290832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8WqY814yTSDVKdHuN73Emp
        status: active
        display_name: 王兆麟
        merged_into_person_id: null
    - claim:
        id: c__38Pb5g2zViYNb5W458U7E
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AekZyQ7TS4wN6cVKAwRb86
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3tVdbHs9MiNpn5GzzbU-3B
          claim_id: c__38Pb5g2zViYNb5W458U7E
          source_id: s_GWgJtbCgupBjz3MNCYM3GN
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GWgJtbCgupBjz3MNCYM3GN
            source_type: api_record
            title: 中国历代人物传记资料库：王兆龍（CBDB 290830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290830&o=json
            external_identifier: CBDB:290830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AekZyQ7TS4wN6cVKAwRb86
        status: active
        display_name: 王兆龍
        merged_into_person_id: null
    - claim:
        id: c_ODGEXjXt9PzSczXzyUghAq
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2vfjZEAB3tmA8eeTjXtSfA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ec87jOVMT7DNuMda3PKMlH
          claim_id: c_ODGEXjXt9PzSczXzyUghAq
          source_id: s_mMA7XzLPvvEFV1ZLdqR2A8
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mMA7XzLPvvEFV1ZLdqR2A8
            source_type: api_record
            title: 中国历代人物传记资料库：王兆禎（CBDB 290833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290833&o=json
            external_identifier: CBDB:290833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_2vfjZEAB3tmA8eeTjXtSfA
        status: active
        display_name: 王兆禎
        merged_into_person_id: null
    - claim:
        id: c_4jwhaO2rZG0IzPB0XnJDyo
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VRxNxJGJ49fJ6ZdRGqLVAX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ly1p6r4fGBk43Av3VjX5a
          claim_id: c_4jwhaO2rZG0IzPB0XnJDyo
          source_id: s_vey3PPoMqN2hXHJisK8vz1
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vey3PPoMqN2hXHJisK8vz1
            source_type: api_record
            title: 中国历代人物传记资料库：王兆鳳（CBDB 290831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290831&o=json
            external_identifier: CBDB:290831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VRxNxJGJ49fJ6ZdRGqLVAX
        status: active
        display_name: 王兆鳳
        merged_into_person_id: null
  other: []
---

# 王廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷 | accepted |
| death.date | 1589年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N7qE8Uar4CzK9TTK6UVM28 | 王希文 | accepted |
| children | p_56nMpgobEseCZRMmEFRumw | 王續之 | accepted |
| children | p_Gq24SpR1JwxAtM1Y4bPKFh | 王繼之 | accepted |
| ancestors | p_6AWFkDwvMEx3gmWMnZMPwe | 王昺 | accepted |
| ancestors | p_maPAMJTQdq43e6ioGBHvAp | 王銳 | accepted |
| descendants | p_8WqY814yTSDVKdHuN73Emp | 王兆麟 | accepted |
| descendants | p_AekZyQ7TS4wN6cVKAwRb86 | 王兆龍 | accepted |
| descendants | p_2vfjZEAB3tmA8eeTjXtSfA | 王兆禎 | accepted |
| descendants | p_VRxNxJGJ49fJ6ZdRGqLVAX | 王兆鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昺（CBDB 209880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209880&o=json)
- [中国历代人物传记资料库：王繼之（CBDB 290828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290828&o=json)
- [中国历代人物传记资料库：王銳（CBDB 290805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290805&o=json)
- [中国历代人物传记资料库：王廷（CBDB 69148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69148&o=json)
- [中国历代人物传记资料库：王希文（CBDB 209884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209884&o=json)
- [中国历代人物传记资料库：王續之（CBDB 290827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290827&o=json)
- [中国历代人物传记资料库：王兆鳳（CBDB 290831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290831&o=json)
- [中国历代人物传记资料库：王兆麟（CBDB 290832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290832&o=json)
- [中国历代人物传记资料库：王兆龍（CBDB 290830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290830&o=json)
- [中国历代人物传记资料库：王兆禎（CBDB 290833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290833&o=json)
