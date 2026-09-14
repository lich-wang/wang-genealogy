---
schema: wang-person/v1
id: p_oruQD3pLHzNQ8AvU3GVazK
status: active
merged_into: null
display_name: 王維熊
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gLw47DwJiYMKjhEbbBF364
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維熊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wbD2EcfB3HrsGd5WBAFKgQ
          claim_id: c_gLw47DwJiYMKjhEbbBF364
          source_id: s_dip9sog27EWtnAMgMLoxRS
          stance: supports
          locator: CBDB:222809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222809）
          source: &a1
            id: s_dip9sog27EWtnAMgMLoxRS
            source_type: api_record
            title: 中国历代人物传记资料库：王維熊（CBDB 222809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222809&o=json
            external_identifier: CBDB:222809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7F8hGVGPF2d743wpCThyY6
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王維熊，明人物。萬曆十一年進士，籍贯金壇，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 222809）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JipJsHYaCC8uDyWn_Bam1C
          claim_id: c_7F8hGVGPF2d743wpCThyY6
          source_id: s_dip9sog27EWtnAMgMLoxRS
          stance: supports
          locator: CBDB:222809
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_yMq7gU5uT_OzSZoheAJkUP
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MCWDkn1BAdGQXi7v0JU_27
          claim_id: c_yMq7gU5uT_OzSZoheAJkUP
          source_id: s_dip9sog27EWtnAMgMLoxRS
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第六十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DpuSp4mmLYMfmUMioXctjR
        status: active
        display_name: 王堯封
        merged_into_person_id: null
    - claim:
        id: c_HLDKZbU-CNuejXKDvH97-_
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1veF7VdqFLD1R864GCoBzD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cq1BYL0OAeadyvRbJH-jCW
          claim_id: c_HLDKZbU-CNuejXKDvH97-_
          source_id: s__GhAWUXaKU5Ow2NdXVXQoK
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王思道 与 王堯封 为同胞（CBDB 记「弟」），王堯封 之父／母即 王思道 之父／母。
          source:
            id: s__GhAWUXaKU5Ow2NdXVXQoK
            source_type: api_record
            title: 中国历代人物传记资料库：王思道（CBDB 222813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222813&o=json
            external_identifier: CBDB:222813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1veF7VdqFLD1R864GCoBzD
        status: active
        display_name: 王思道
        merged_into_person_id: null
    - claim:
        id: c__eaMxMsv42aLFigtH3RNiU
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_35Lcsnh3TGHhfz59sQBgQ4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TT9MBbEvZhRCfAQd9eI7Ub
          claim_id: c__eaMxMsv42aLFigtH3RNiU
          source_id: s_VulNBV7PgVTUkn1YOZu1qr
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王坊 与 王堯封 为同胞（CBDB 记「弟」），王堯封 之父／母即 王坊 之父／母。
          source:
            id: s_VulNBV7PgVTUkn1YOZu1qr
            source_type: api_record
            title: 中国历代人物传记资料库：王坊（CBDB 222814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222814&o=json
            external_identifier: CBDB:222814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_35Lcsnh3TGHhfz59sQBgQ4
        status: active
        display_name: 王坊
        merged_into_person_id: null
    - claim:
        id: c_cF4s7Ys-uwa5l4RkDZCz4t
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_43gLfFZDJkTnCqgKcveznd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ephLkIB2WD4a--zUmMpUrv
          claim_id: c_cF4s7Ys-uwa5l4RkDZCz4t
          source_id: s_rm-AfN4BiEhkgmUJiXBqtA
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王思聰 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王思聰 之父／母。
          source:
            id: s_rm-AfN4BiEhkgmUJiXBqtA
            source_type: api_record
            title: 中国历代人物传记资料库：王思聰（CBDB 222818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222818&o=json
            external_identifier: CBDB:222818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_43gLfFZDJkTnCqgKcveznd
        status: active
        display_name: 王思聰
        merged_into_person_id: null
    - claim:
        id: c_ftHGoigUgcC013OyBU8MgF
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7rbnTG1Lxb1Nu3UW8SrCL4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VQCNbHI7gpY8MhkF6oqiHQ
          claim_id: c_ftHGoigUgcC013OyBU8MgF
          source_id: s_YRCzwi7tbVx2viwNELoCw3
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王堯甸 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王堯甸 之父／母。
          source:
            id: s_YRCzwi7tbVx2viwNELoCw3
            source_type: api_record
            title: 中国历代人物传记资料库：王堯甸（CBDB 222823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222823&o=json
            external_identifier: CBDB:222823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7rbnTG1Lxb1Nu3UW8SrCL4
        status: active
        display_name: 王堯甸
        merged_into_person_id: null
    - claim:
        id: c_AtIrSsI3yWLeE25T0myFli
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fv4xGzQELfdfoLScmzCEhq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UCOfFijeNlBCjZyQojMNhs
          claim_id: c_AtIrSsI3yWLeE25T0myFli
          source_id: s_e1znalecXyExCpwSHlt7sp
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王元坿 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王元坿 之父／母。
          source:
            id: s_e1znalecXyExCpwSHlt7sp
            source_type: api_record
            title: 中国历代人物传记资料库：王元坿（CBDB 222824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222824&o=json
            external_identifier: CBDB:222824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Fv4xGzQELfdfoLScmzCEhq
        status: active
        display_name: 王元坿
        merged_into_person_id: null
    - claim:
        id: c_U9p69nB9EMcszodCOXLPK4
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KLU9Psur1AsU89H8q3MRAb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7XKXEpXhaqm35oKBhfEeVF
          claim_id: c_U9p69nB9EMcszodCOXLPK4
          source_id: s_OEEbj4EgdaXio76Pwl9fNk
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王啟疆 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王啟疆 之父／母。
          source:
            id: s_OEEbj4EgdaXio76Pwl9fNk
            source_type: api_record
            title: 中国历代人物传记资料库：王啟疆（CBDB 222819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222819&o=json
            external_identifier: CBDB:222819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KLU9Psur1AsU89H8q3MRAb
        status: active
        display_name: 王啟疆
        merged_into_person_id: null
    - claim:
        id: c_OdTS4o3OmxAhMS2MH9_YxY
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z5KpoCpX2Pjq1iKHAdBCQx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2dcxeFFlP3U6heqIq3sbDc
          claim_id: c_OdTS4o3OmxAhMS2MH9_YxY
          source_id: s_tDtK8tycxZ5NHpjlBCGHOY
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王肯堂 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王肯堂 之父／母。
          source:
            id: s_tDtK8tycxZ5NHpjlBCGHOY
            source_type: api_record
            title: 中国历代人物传记资料库：王肯堂（CBDB 222822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222822&o=json
            external_identifier: CBDB:222822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z5KpoCpX2Pjq1iKHAdBCQx
        status: active
        display_name: 王肯堂
        merged_into_person_id: null
    - claim:
        id: c_UpYEfxZQ_xkxhES7orIGHh
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r4sAd9PLc2f12uwSYcuCCC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U-YwkZI6r5RtRShx-Ps3EA
          claim_id: c_UpYEfxZQ_xkxhES7orIGHh
          source_id: s_T5_cNbOSifgwxvh5plPcLu
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王堯臣 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王堯臣 之父／母。
          source:
            id: s_T5_cNbOSifgwxvh5plPcLu
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 222820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222820&o=json
            external_identifier: CBDB:222820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r4sAd9PLc2f12uwSYcuCCC
        status: active
        display_name: 王堯臣
        merged_into_person_id: null
    - claim:
        id: c_hFVDCKmM77TlqexsCNpCZA
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rx146yfAJAttd9S4hWxx2n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g90CzJivVZHYeJF7m7EtO-
          claim_id: c_hFVDCKmM77TlqexsCNpCZA
          source_id: s_syx7O2FMDArUwhvlwxylX3
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王堅 与 王堯封 为同胞（CBDB 记「弟」），王堯封 之父／母即 王堅 之父／母。
          source:
            id: s_syx7O2FMDArUwhvlwxylX3
            source_type: api_record
            title: 中国历代人物传记资料库：王堅（CBDB 222817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222817&o=json
            external_identifier: CBDB:222817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rx146yfAJAttd9S4hWxx2n
        status: active
        display_name: 王堅
        merged_into_person_id: null
    - claim:
        id: c_IQbCsudl9a4PCZPrc3JQf4
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vHoxdq9TDRoy7D4u6fjgnn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SOWmfvphPgjKmkrk-3Idor
          claim_id: c_IQbCsudl9a4PCZPrc3JQf4
          source_id: s_4ECyIRN-Y3d6HZO31Osszt
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王邦達 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王邦達 之父／母。
          source:
            id: s_4ECyIRN-Y3d6HZO31Osszt
            source_type: api_record
            title: 中国历代人物传记资料库：王邦達（CBDB 222825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222825&o=json
            external_identifier: CBDB:222825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vHoxdq9TDRoy7D4u6fjgnn
        status: active
        display_name: 王邦達
        merged_into_person_id: null
    - claim:
        id: c_aLdJTv2Myu3Iny1X2VB_YN
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yLHKZhRHCNxfP7yMtYgTFv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kz4Rk_Ent7doug064tkPyI
          claim_id: c_aLdJTv2Myu3Iny1X2VB_YN
          source_id: s_WalMDWXHyGfo9_qMAWbLdd
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王塈 与 王堯封 为同胞（CBDB 记「弟」），王堯封 之父／母即 王塈 之父／母。
          source:
            id: s_WalMDWXHyGfo9_qMAWbLdd
            source_type: api_record
            title: 中国历代人物传记资料库：王塈（CBDB 222815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222815&o=json
            external_identifier: CBDB:222815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yLHKZhRHCNxfP7yMtYgTFv
        status: active
        display_name: 王塈
        merged_into_person_id: null
    - claim:
        id: c_BhgbBBN2dtOniZcK8A0PVP
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zLfR8pe4RRKoXX7n1YPQzC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lQ_wW-fH2JzrjTN1KRNajU
          claim_id: c_BhgbBBN2dtOniZcK8A0PVP
          source_id: s_Euxm06HBb5h27GXRHiQUXx
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王址 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王址 之父／母。
          source:
            id: s_Euxm06HBb5h27GXRHiQUXx
            source_type: api_record
            title: 中国历代人物传记资料库：王址（CBDB 222821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222821&o=json
            external_identifier: CBDB:222821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zLfR8pe4RRKoXX7n1YPQzC
        status: active
        display_name: 王址
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王維熊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維熊 | accepted |
| bio.summary | 王維熊，明人物。萬曆十一年進士，籍贯金壇，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 222809） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DpuSp4mmLYMfmUMioXctjR | 王堯封 | accepted |
| children | p_1veF7VdqFLD1R864GCoBzD | 王思道 | accepted |
| children | p_35Lcsnh3TGHhfz59sQBgQ4 | 王坊 | accepted |
| children | p_43gLfFZDJkTnCqgKcveznd | 王思聰 | accepted |
| children | p_7rbnTG1Lxb1Nu3UW8SrCL4 | 王堯甸 | accepted |
| children | p_Fv4xGzQELfdfoLScmzCEhq | 王元坿 | accepted |
| children | p_KLU9Psur1AsU89H8q3MRAb | 王啟疆 | accepted |
| children | p_Z5KpoCpX2Pjq1iKHAdBCQx | 王肯堂 | accepted |
| children | p_r4sAd9PLc2f12uwSYcuCCC | 王堯臣 | accepted |
| children | p_rx146yfAJAttd9S4hWxx2n | 王堅 | accepted |
| children | p_vHoxdq9TDRoy7D4u6fjgnn | 王邦達 | accepted |
| children | p_yLHKZhRHCNxfP7yMtYgTFv | 王塈 | accepted |
| children | p_zLfR8pe4RRKoXX7n1YPQzC | 王址 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦達（CBDB 222825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222825&o=json)
- [中国历代人物传记资料库：王坊（CBDB 222814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222814&o=json)
- [中国历代人物传记资料库：王塈（CBDB 222815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222815&o=json)
- [中国历代人物传记资料库：王堅（CBDB 222817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222817&o=json)
- [中国历代人物传记资料库：王肯堂（CBDB 222822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222822&o=json)
- [中国历代人物传记资料库：王啟疆（CBDB 222819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222819&o=json)
- [中国历代人物传记资料库：王思聰（CBDB 222818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222818&o=json)
- [中国历代人物传记资料库：王思道（CBDB 222813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222813&o=json)
- [中国历代人物传记资料库：王維熊（CBDB 222809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222809&o=json)
- [中国历代人物传记资料库：王堯臣（CBDB 222820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222820&o=json)
- [中国历代人物传记资料库：王堯甸（CBDB 222823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222823&o=json)
- [中国历代人物传记资料库：王元坿（CBDB 222824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222824&o=json)
- [中国历代人物传记资料库：王址（CBDB 222821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222821&o=json)
