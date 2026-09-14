---
schema: wang-person/v1
id: p_pv2pDE9A1jj2uMGHCGpC7T
status: active
merged_into: null
display_name: 王廷
revision: 20
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
          text: 王廷（卒于1589年），明人物。明清進士進士，籍贯南充，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 69148）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kkqd-HRSUmuAl6f7eaPRNk
          claim_id: c_EuRFsYZhNAZeD8PXGXhzS1
          source_id: s_gNxG6LoadbE6BqckR2GKJ9
          stance: supports
          locator: CBDB:69148
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
  other:
    - claim:
        id: c_SaodVc-XUNW-5Lx7SPO0bJ
        subject_person_id: p_1TVKvp1a17v9go5ENtPAQ8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_do0cUWDadPbnbNGjQLkEZh
          claim_id: c_SaodVc-XUNW-5Lx7SPO0bJ
          source_id: s_ZapI3GK4XE2aWtcvnOKiqV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZapI3GK4XE2aWtcvnOKiqV
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 290824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290824&o=json
            external_identifier: CBDB:290824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1TVKvp1a17v9go5ENtPAQ8
        status: active
        display_name: 王進
        merged_into_person_id: null
    - claim:
        id: c_Tlfx0FBXkttelI9oCATORE
        subject_person_id: p_2UaPva3PJ4SimEwsC8AKh3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W3abO-FxBAgoT6aKaYLowr
          claim_id: c_Tlfx0FBXkttelI9oCATORE
          source_id: s_OZKCRe-FoVy8x6JMTLYS3d
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OZKCRe-FoVy8x6JMTLYS3d
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 290823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json
            external_identifier: CBDB:290823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2UaPva3PJ4SimEwsC8AKh3
        status: active
        display_name: 王謙
        merged_into_person_id: null
    - claim:
        id: c_WGQmUAhZl1iWmj9CD-Zew7
        subject_person_id: p_2b3kEpBDNX9UQbK8kWgjC2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rXHaEkeL92RpK1uRmkcJIj
          claim_id: c_WGQmUAhZl1iWmj9CD-Zew7
          source_id: s_GRbwsk73PZmEcRelpPGdQm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GRbwsk73PZmEcRelpPGdQm
            source_type: api_record
            title: 中国历代人物传记资料库：王迨（CBDB 290825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290825&o=json
            external_identifier: CBDB:290825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2b3kEpBDNX9UQbK8kWgjC2
        status: active
        display_name: 王迨
        merged_into_person_id: null
    - claim:
        id: c_XQh8OkFdqGCaOCZUCsnBFc
        subject_person_id: p_DETEvzeBubX45FgE9jDjJB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wijIm4fIXgsD4oChvv-5QP
          claim_id: c_XQh8OkFdqGCaOCZUCsnBFc
          source_id: s_ZnYlEhSpijw83RTOtCcBTK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZnYlEhSpijw83RTOtCcBTK
            source_type: api_record
            title: 中国历代人物传记资料库：王邁（CBDB 290821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290821&o=json
            external_identifier: CBDB:290821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DETEvzeBubX45FgE9jDjJB
        status: active
        display_name: 王邁
        merged_into_person_id: null
    - claim:
        id: c_E9Xo6h0dLExxvuTVq1Zz3A
        subject_person_id: p_EhLuzakM77Au4WLhNNyX41
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gG18ysPFUTc3_6ekSpQgmu
          claim_id: c_E9Xo6h0dLExxvuTVq1Zz3A
          source_id: s_MHqRX7mOhkmgJF2ufs8kt3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MHqRX7mOhkmgJF2ufs8kt3
            source_type: api_record
            title: 中国历代人物传记资料库：王遴（CBDB 290820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json
            external_identifier: CBDB:290820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EhLuzakM77Au4WLhNNyX41
        status: active
        display_name: 王遴
        merged_into_person_id: null
    - claim:
        id: c_T4fiV__hWkilr3RigKdDbo
        subject_person_id: p_HNXh67GiFTsu28KiwC1hUX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wtgdgf93WXrcj0Xt8RfEVb
          claim_id: c_T4fiV__hWkilr3RigKdDbo
          source_id: s_Mf8a11WACOkEsRDIrSbUax
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Mf8a11WACOkEsRDIrSbUax
            source_type: api_record
            title: 中国历代人物传记资料库：王遷（CBDB 290812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290812&o=json
            external_identifier: CBDB:290812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HNXh67GiFTsu28KiwC1hUX
        status: active
        display_name: 王遷
        merged_into_person_id: null
    - claim:
        id: c_LJevDQOMgoZ-2g1Xc33vOo
        subject_person_id: p_PsXxCSg8UX48nkvZWrXMv2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_533GWJbdxyMoWHaq1PsG9h
          claim_id: c_LJevDQOMgoZ-2g1Xc33vOo
          source_id: s_ZpAnqmYRLSBAADlr4GyEjY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZpAnqmYRLSBAADlr4GyEjY
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 290819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290819&o=json
            external_identifier: CBDB:290819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PsXxCSg8UX48nkvZWrXMv2
        status: active
        display_name: 王郁
        merged_into_person_id: null
    - claim:
        id: c_luWrboX2231tL1MAHA4MpF
        subject_person_id: p_QKjMqf1kcgRnbebgJAAErq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K0iFQAInHF17GBcRA9DWia
          claim_id: c_luWrboX2231tL1MAHA4MpF
          source_id: s_1xRqa87Xvd7XnOgMEibN98
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1xRqa87Xvd7XnOgMEibN98
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 290811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290811&o=json
            external_identifier: CBDB:290811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QKjMqf1kcgRnbebgJAAErq
        status: active
        display_name: 王選
        merged_into_person_id: null
    - claim:
        id: c_7GHxWlZBGlc_bcAmqHMHoj
        subject_person_id: p_SXrnVya55CwoArA8f7hzUE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QgKQgMIfRquSm7qVFKbg30
          claim_id: c_7GHxWlZBGlc_bcAmqHMHoj
          source_id: s_Ny-f8fa-XjaDXXbzmxGDYo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ny-f8fa-XjaDXXbzmxGDYo
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 290813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json
            external_identifier: CBDB:290813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SXrnVya55CwoArA8f7hzUE
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_CwfPaK6cy4ZeTL-Llwl0Ge
        subject_person_id: p_bqXS9vVUEtwfuY1c1KuxB5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zKryNR05Cfx93cCmq6HpDi
          claim_id: c_CwfPaK6cy4ZeTL-Llwl0Ge
          source_id: s_r1PGKFijZzYi9sqGrXGwns
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r1PGKFijZzYi9sqGrXGwns
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 290814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290814&o=json
            external_identifier: CBDB:290814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bqXS9vVUEtwfuY1c1KuxB5
        status: active
        display_name: 王瑤
        merged_into_person_id: null
    - claim:
        id: c_OB6KQGlX_7u_rl0XBmAQ9z
        subject_person_id: p_fbzKwFnip9EhEf2G4NEZSx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bHKvpqNWlp34DYiC4rAtHF
          claim_id: c_OB6KQGlX_7u_rl0XBmAQ9z
          source_id: s_gYbq4vwudUBHSAnV_hMsX3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gYbq4vwudUBHSAnV_hMsX3
            source_type: api_record
            title: 中国历代人物传记资料库：王追（CBDB 290817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json
            external_identifier: CBDB:290817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fbzKwFnip9EhEf2G4NEZSx
        status: active
        display_name: 王追
        merged_into_person_id: null
    - claim:
        id: c_ubhcSpzt-iSrfSQOAPI_RH
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wx11a4tsD5E2d3K8rANk2m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m1O0RxRWrSjJYcFnJ6obuN
          claim_id: c_ubhcSpzt-iSrfSQOAPI_RH
          source_id: s_77Q7xXzra0Hi_QL4t_AeKj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_77Q7xXzra0Hi_QL4t_AeKj
            source_type: api_record
            title: 中国历代人物传记资料库：王逢（CBDB 290822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290822&o=json
            external_identifier: CBDB:290822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wx11a4tsD5E2d3K8rANk2m
        status: active
        display_name: 王逢
        merged_into_person_id: null
    - claim:
        id: c_OjcKZUN1YVyRKOQfxfURDX
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_z41LnXqzG7vpYKebnbHsJk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gsy3NFlfBPxz2z7-pdMpxg
          claim_id: c_OjcKZUN1YVyRKOQfxfURDX
          source_id: s_hQgIAuGDD-j4A1cztr4-Pv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hQgIAuGDD-j4A1cztr4-Pv
            source_type: api_record
            title: 中国历代人物传记资料库：王迎（CBDB 290815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290815&o=json
            external_identifier: CBDB:290815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z41LnXqzG7vpYKebnbHsJk
        status: active
        display_name: 王迎
        merged_into_person_id: null
---

# 王廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷 | accepted |
| death.date | 1589年 | accepted |
| bio.summary | 王廷（卒于1589年），明人物。明清進士進士，籍贯南充，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 69148） | accepted |

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
| other | p_1TVKvp1a17v9go5ENtPAQ8 | 王進 | accepted |
| other | p_2UaPva3PJ4SimEwsC8AKh3 | 王謙 | accepted |
| other | p_2b3kEpBDNX9UQbK8kWgjC2 | 王迨 | accepted |
| other | p_DETEvzeBubX45FgE9jDjJB | 王邁 | accepted |
| other | p_EhLuzakM77Au4WLhNNyX41 | 王遴 | accepted |
| other | p_HNXh67GiFTsu28KiwC1hUX | 王遷 | accepted |
| other | p_PsXxCSg8UX48nkvZWrXMv2 | 王郁 | accepted |
| other | p_QKjMqf1kcgRnbebgJAAErq | 王選 | accepted |
| other | p_SXrnVya55CwoArA8f7hzUE | 王達 | accepted |
| other | p_bqXS9vVUEtwfuY1c1KuxB5 | 王瑤 | accepted |
| other | p_fbzKwFnip9EhEf2G4NEZSx | 王追 | accepted |
| other | p_wx11a4tsD5E2d3K8rANk2m | 王逢 | accepted |
| other | p_z41LnXqzG7vpYKebnbHsJk | 王迎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昺（CBDB 209880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209880&o=json)
- [中国历代人物传记资料库：王達（CBDB 290813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json)
- [中国历代人物传记资料库：王迨（CBDB 290825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290825&o=json)
- [中国历代人物传记资料库：王逢（CBDB 290822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290822&o=json)
- [中国历代人物传记资料库：王繼之（CBDB 290828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290828&o=json)
- [中国历代人物传记资料库：王進（CBDB 290824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290824&o=json)
- [中国历代人物传记资料库：王遴（CBDB 290820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json)
- [中国历代人物传记资料库：王邁（CBDB 290821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290821&o=json)
- [中国历代人物传记资料库：王遷（CBDB 290812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290812&o=json)
- [中国历代人物传记资料库：王謙（CBDB 290823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json)
- [中国历代人物传记资料库：王銳（CBDB 290805）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290805&o=json)
- [中国历代人物传记资料库：王廷（CBDB 69148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69148&o=json)
- [中国历代人物传记资料库：王希文（CBDB 209884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209884&o=json)
- [中国历代人物传记资料库：王續之（CBDB 290827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290827&o=json)
- [中国历代人物传记资料库：王選（CBDB 290811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290811&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 290814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290814&o=json)
- [中国历代人物传记资料库：王迎（CBDB 290815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290815&o=json)
- [中国历代人物传记资料库：王郁（CBDB 290819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290819&o=json)
- [中国历代人物传记资料库：王兆鳳（CBDB 290831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290831&o=json)
- [中国历代人物传记资料库：王兆麟（CBDB 290832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290832&o=json)
- [中国历代人物传记资料库：王兆龍（CBDB 290830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290830&o=json)
- [中国历代人物传记资料库：王兆禎（CBDB 290833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290833&o=json)
- [中国历代人物传记资料库：王追（CBDB 290817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json)
