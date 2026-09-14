---
schema: wang-person/v1
id: p_RtbMaDgB4aPoZ2sWestmc6
status: active
merged_into: null
display_name: 王緯
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nW21G7yoJX1TSFi5qTGwG
        subject_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Et5TwJDvRPuuZVHvJeCDvk
          claim_id: c_8nW21G7yoJX1TSFi5qTGwG
          source_id: s_TZaKAbrGgqVnEHqF7JVPrE
          stance: supports
          locator: CBDB:200487
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200487）
          source: &a1
            id: s_TZaKAbrGgqVnEHqF7JVPrE
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 200487）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200487&o=json
            external_identifier: CBDB:200487
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.615Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_y6SekejQA1DmA84FDkG9KP
        subject_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1458年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YNStxZ2fV63JBFbYEeJqkx
          claim_id: c_y6SekejQA1DmA84FDkG9KP
          source_id: s_TZaKAbrGgqVnEHqF7JVPrE
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
        id: c_hqsHgH68GBDxCvFMnpTv3r
        subject_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緯（生于1458年），明人物。明清進士進士，籍贯祥符，入仕進士。（中国历代人物传记资料库 CBDB 200487）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VIeajm-vGCZ1r_tnh85F37
          claim_id: c_hqsHgH68GBDxCvFMnpTv3r
          source_id: s_TZaKAbrGgqVnEHqF7JVPrE
          stance: supports
          locator: CBDB:200487
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DwAf6mDLcgpvKyDy2XyTm1
        subject_person_id: p_A34R6HSqpELVRnhSkVhaV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vOh2idUjEzVDlEDdzOhDN1
          claim_id: c_DwAf6mDLcgpvKyDy2XyTm1
          source_id: s_PuzVFzyRPrwAiF5boBQEMS
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PuzVFzyRPrwAiF5boBQEMS
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 258706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258706&o=json
            external_identifier: CBDB:258706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.440Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A34R6HSqpELVRnhSkVhaV5
        status: active
        display_name: 王豫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_UMXgfJxvlyx_kbf4EugSf1
        subject_person_id: p_fQ8a3a8SS5uVatavagGR7g
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9We3mDkIkrTUgkVQT3lGA2
          claim_id: c_UMXgfJxvlyx_kbf4EugSf1
          source_id: s_RBdk3SWYAjm53C1jYk5Lx1
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RBdk3SWYAjm53C1jYk5Lx1
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 258704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258704&o=json
            external_identifier: CBDB:258704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fQ8a3a8SS5uVatavagGR7g
        status: active
        display_name: 王成
        merged_into_person_id: null
    - claim:
        id: c_ud2XHTBzVYhdk5Po5KF--g
        subject_person_id: p_tkUNXcA677d1317WiJhhbV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6F_8ovLWjjR5PQ9J9gk0Af
          claim_id: c_ud2XHTBzVYhdk5Po5KF--g
          source_id: s_vFBr897o8grqzBn2xhq1jR
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vFBr897o8grqzBn2xhq1jR
            source_type: api_record
            title: 中国历代人物传记资料库：王和（CBDB 258705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258705&o=json
            external_identifier: CBDB:258705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.439Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tkUNXcA677d1317WiJhhbV
        status: active
        display_name: 王和
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_tgbrmn8-l3kBiYXwcsoyuS
        subject_person_id: p_33T6YpPc61tFcacoU2yqF2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fBuGKRLQwQEl28L6WNeXrx
          claim_id: c_tgbrmn8-l3kBiYXwcsoyuS
          source_id: s_p7RayLlTWlMSWExCT1bd2y
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200487 王緯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_p7RayLlTWlMSWExCT1bd2y
            source_type: api_record
            title: 中国历代人物传记资料库：王綉（CBDB 258715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258715&o=json
            external_identifier: CBDB:258715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_33T6YpPc61tFcacoU2yqF2
        status: active
        display_name: 王綉
        merged_into_person_id: null
    - claim:
        id: c_LkxZ7EDLJp4b39-vs_B-n1
        subject_person_id: p_49MyH599Aa41aGHfKtzBKP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7mA48CGDKt1XxDIQDXVLrw
          claim_id: c_LkxZ7EDLJp4b39-vs_B-n1
          source_id: s_aWScdxHhcmRt4C-Qxo8FEB
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200487 王緯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aWScdxHhcmRt4C-Qxo8FEB
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 258710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258710&o=json
            external_identifier: CBDB:258710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_49MyH599Aa41aGHfKtzBKP
        status: active
        display_name: 王紳
        merged_into_person_id: null
    - claim:
        id: c_0AgdRDrPnPMacL0NXMgEYO
        subject_person_id: p_6hyLnzmCeQM9LAUbgorHGm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pCJPXskjBgQGecFaG7IHOE
          claim_id: c_0AgdRDrPnPMacL0NXMgEYO
          source_id: s_Fw70FQICWD69wX0v5eI_UX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200487 王緯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Fw70FQICWD69wX0v5eI_UX
            source_type: api_record
            title: 中国历代人物传记资料库：王綺（CBDB 258714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258714&o=json
            external_identifier: CBDB:258714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6hyLnzmCeQM9LAUbgorHGm
        status: active
        display_name: 王綺
        merged_into_person_id: null
    - claim:
        id: c_OM0pj0mG9SjZlZmX2ZKB7b
        subject_person_id: p_8gBmg8AVP1As7CrZYfp7eJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JW304yAfEh4nMJo3sWtgIX
          claim_id: c_OM0pj0mG9SjZlZmX2ZKB7b
          source_id: s_eHxDhQVxxOOItR_BVIjQ4_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200487 王緯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eHxDhQVxxOOItR_BVIjQ4_
            source_type: api_record
            title: 中国历代人物传记资料库：王紵（CBDB 258719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258719&o=json
            external_identifier: CBDB:258719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8gBmg8AVP1As7CrZYfp7eJ
        status: active
        display_name: 王紵
        merged_into_person_id: null
    - claim:
        id: c_5xDuF8xBmd5j78iLp4z-bX
        subject_person_id: p_8pKViTjExNDs4uameDHUud
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-13reXnMWrcDEMeEwTkO6f
          claim_id: c_5xDuF8xBmd5j78iLp4z-bX
          source_id: s_mzG4hJnuRG2jfvrNKgjLrV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200487 王緯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mzG4hJnuRG2jfvrNKgjLrV
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 258711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258711&o=json
            external_identifier: CBDB:258711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8pKViTjExNDs4uameDHUud
        status: active
        display_name: 王綬
        merged_into_person_id: null
    - claim:
        id: c_2PUt54SvNtJ2Uwt5R54QsM
        subject_person_id: p_D4KBJwKfJ7VCaXB4ym7dw3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h6QMPRUN5WiSUd8dK2z6ic
          claim_id: c_2PUt54SvNtJ2Uwt5R54QsM
          source_id: s_WJlrefy4QWevIaETzEYtpi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200487 王緯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WJlrefy4QWevIaETzEYtpi
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 258716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258716&o=json
            external_identifier: CBDB:258716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D4KBJwKfJ7VCaXB4ym7dw3
        status: active
        display_name: 王紀
        merged_into_person_id: null
    - claim:
        id: c_IXgi8OXmZHMyybklOztz0w
        subject_person_id: p_DoLeBbmsD7oxzdtpw4u7J8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l7Aimds7hZQpa6_7o7FfNu
          claim_id: c_IXgi8OXmZHMyybklOztz0w
          source_id: s_zk0Dkm-fhSVSrEva58TvSu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200487 王緯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zk0Dkm-fhSVSrEva58TvSu
            source_type: api_record
            title: 中国历代人物传记资料库：王纁（CBDB 258717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258717&o=json
            external_identifier: CBDB:258717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DoLeBbmsD7oxzdtpw4u7J8
        status: active
        display_name: 王纁
        merged_into_person_id: null
    - claim:
        id: c_6rnL4tjP2sJXkyPmJbqIA5
        subject_person_id: p_G7xLPmBQAwFK6Z31duBMmd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IQIdURED341zgbeyzMFyMh
          claim_id: c_6rnL4tjP2sJXkyPmJbqIA5
          source_id: s__UZh9jbP09gdmbxlXtxl7l
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200487 王緯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__UZh9jbP09gdmbxlXtxl7l
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 258709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258709&o=json
            external_identifier: CBDB:258709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G7xLPmBQAwFK6Z31duBMmd
        status: active
        display_name: 王經
        merged_into_person_id: null
    - claim:
        id: c_1ycb3Y2PJHz6K5VNhWHLE6
        subject_person_id: p_QKcVBKZuWLzoUFo8WnitgL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qIjJtUAOBDzxyMdJhIC1Bo
          claim_id: c_1ycb3Y2PJHz6K5VNhWHLE6
          source_id: s_-Y73-VgffFpGP_yY0BtkCN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200487 王緯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-Y73-VgffFpGP_yY0BtkCN
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 258718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258718&o=json
            external_identifier: CBDB:258718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QKcVBKZuWLzoUFo8WnitgL
        status: active
        display_name: 王紘
        merged_into_person_id: null
    - claim:
        id: c_4FvXiojqQPmj_z9J-8-IBP
        subject_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WxejvxAxttqaMQAoyr4RrF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t3pbisfjYWmhECxj0oslrD
          claim_id: c_4FvXiojqQPmj_z9J-8-IBP
          source_id: s_aEpqHpGYLFbwY1OXnAmPhy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200487 王緯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aEpqHpGYLFbwY1OXnAmPhy
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 258712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258712&o=json
            external_identifier: CBDB:258712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WxejvxAxttqaMQAoyr4RrF
        status: active
        display_name: 王紹
        merged_into_person_id: null
---

# 王緯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緯 | accepted |
| birth.date | 1458年 | accepted |
| bio.summary | 王緯（生于1458年），明人物。明清進士進士，籍贯祥符，入仕進士。（中国历代人物传记资料库 CBDB 200487） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A34R6HSqpELVRnhSkVhaV5 | 王豫 | accepted |
| ancestors | p_fQ8a3a8SS5uVatavagGR7g | 王成 | accepted |
| ancestors | p_tkUNXcA677d1317WiJhhbV | 王和 | accepted |
| other | p_33T6YpPc61tFcacoU2yqF2 | 王綉 | accepted |
| other | p_49MyH599Aa41aGHfKtzBKP | 王紳 | accepted |
| other | p_6hyLnzmCeQM9LAUbgorHGm | 王綺 | accepted |
| other | p_8gBmg8AVP1As7CrZYfp7eJ | 王紵 | accepted |
| other | p_8pKViTjExNDs4uameDHUud | 王綬 | accepted |
| other | p_D4KBJwKfJ7VCaXB4ym7dw3 | 王紀 | accepted |
| other | p_DoLeBbmsD7oxzdtpw4u7J8 | 王纁 | accepted |
| other | p_G7xLPmBQAwFK6Z31duBMmd | 王經 | accepted |
| other | p_QKcVBKZuWLzoUFo8WnitgL | 王紘 | accepted |
| other | p_WxejvxAxttqaMQAoyr4RrF | 王紹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 258704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258704&o=json)
- [中国历代人物传记资料库：王和（CBDB 258705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258705&o=json)
- [中国历代人物传记资料库：王紘（CBDB 258718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258718&o=json)
- [中国历代人物传记资料库：王紀（CBDB 258716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258716&o=json)
- [中国历代人物传记资料库：王經（CBDB 258709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258709&o=json)
- [中国历代人物传记资料库：王綺（CBDB 258714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258714&o=json)
- [中国历代人物传记资料库：王紹（CBDB 258712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258712&o=json)
- [中国历代人物传记资料库：王紳（CBDB 258710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258710&o=json)
- [中国历代人物传记资料库：王綬（CBDB 258711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258711&o=json)
- [中国历代人物传记资料库：王綉（CBDB 258715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258715&o=json)
- [中国历代人物传记资料库：王緯（CBDB 200487）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200487&o=json)
- [中国历代人物传记资料库：王纁（CBDB 258717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258717&o=json)
- [中国历代人物传记资料库：王豫（CBDB 258706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258706&o=json)
- [中国历代人物传记资料库：王紵（CBDB 258719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258719&o=json)
