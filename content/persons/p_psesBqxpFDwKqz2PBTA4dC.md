---
schema: wang-person/v1
id: p_psesBqxpFDwKqz2PBTA4dC
status: active
merged_into: null
display_name: 王宗器
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gNKCx2fFnr3zugXWjk5TuP
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗器
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zMCd6jgmJaufMDDLYnCeLK
          claim_id: c_gNKCx2fFnr3zugXWjk5TuP
          source_id: s_rj4Xn1Tt1t2oVSwfrw3wy5
          stance: supports
          locator: CBDB:262581
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262581）
          source: &a1
            id: s_rj4Xn1Tt1t2oVSwfrw3wy5
            source_type: api_record
            title: 中国历代人物传记资料库：王宗器（CBDB 262581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262581&o=json
            external_identifier: CBDB:262581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.593Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K1ArqJeV8srANnxvfX2GBW
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗器，明人物。景泰五年進士，籍贯濟寧州，曾任州同知。（中国历代人物传记资料库 CBDB 262581）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I3XoqPL3If8Qzb_9-KMOy9
          claim_id: c_K1ArqJeV8srANnxvfX2GBW
          source_id: s_rj4Xn1Tt1t2oVSwfrw3wy5
          stance: supports
          locator: CBDB:262581
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_foX01O4HPgtEtpTtd03bqJ
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cnxHgvNWzCNiTbu6SVUA3o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rqpKYBNcQx2IgwiOoAqbLP
          claim_id: c_foX01O4HPgtEtpTtd03bqJ
          source_id: s_rj4Xn1Tt1t2oVSwfrw3wy5
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cnxHgvNWzCNiTbu6SVUA3o
        status: active
        display_name: 王春
        merged_into_person_id: null
    - claim:
        id: c_G8YpviuZ_rd6rrRxA3kE2A
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2X7wSmw2wE7k8i7edasqTV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e_9gtFlxbnU_5otnK2oXOi
          claim_id: c_G8YpviuZ_rd6rrRxA3kE2A
          source_id: s_bZAh3XWnWnX2izPiHFkS4z
          stance: supports
          locator: CBDB：兄弟 王春（198362）之父／母 王宗器
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳 与 王春 为同胞（CBDB 记「弟」），王春 之父／母即 王鳳 之父／母。
          source:
            id: s_bZAh3XWnWnX2izPiHFkS4z
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳（CBDB 262614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262614&o=json
            external_identifier: CBDB:262614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2X7wSmw2wE7k8i7edasqTV
        status: active
        display_name: 王鳳
        merged_into_person_id: null
    - claim:
        id: c_aqrIoAlww1b8_SfRShsABl
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6MGMcTyBshjbphvYsaXUo7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hjmurAhn5i4TPYmnL--WJt
          claim_id: c_aqrIoAlww1b8_SfRShsABl
          source_id: s_f2QkyOIGZkjF2IzUIgttwW
          stance: supports
          locator: CBDB：兄弟 王春（198362）之父／母 王宗器
          quotation: null
          interpretation_note: 由兄弟关系推断：王俊 与 王春 为同胞（CBDB 记「兄」），王春 之父／母即 王俊 之父／母。
          source:
            id: s_f2QkyOIGZkjF2IzUIgttwW
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 262670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262670&o=json
            external_identifier: CBDB:262670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6MGMcTyBshjbphvYsaXUo7
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_pPbaERfJp6bHP5ZIReQHvd
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C4u12XMpyLMet89ty14rkZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QdcxrjnYFMXbhOPrghQg7A
          claim_id: c_pPbaERfJp6bHP5ZIReQHvd
          source_id: s_I0eoR78uFDcyiWAD_bLzBr
          stance: supports
          locator: CBDB：兄弟 王春（198362）之父／母 王宗器
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王春 为同胞（CBDB 记「兄」），王春 之父／母即 王佐 之父／母。
          source:
            id: s_I0eoR78uFDcyiWAD_bLzBr
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 262648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262648&o=json
            external_identifier: CBDB:262648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C4u12XMpyLMet89ty14rkZ
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_RzZ7A_MLWycgARqC_3fcCL
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_K2ekES6mKeE39N363otRZZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YfN_Xc7t0DdfICu4HJQRNs
          claim_id: c_RzZ7A_MLWycgARqC_3fcCL
          source_id: s_elsq1NoaQzCxSrmQtiHoqv
          stance: supports
          locator: CBDB：兄弟 王春（198362）之父／母 王宗器
          quotation: null
          interpretation_note: 由兄弟关系推断：王儀 与 王春 为同胞（CBDB 记「兄」），王春 之父／母即 王儀 之父／母。
          source:
            id: s_elsq1NoaQzCxSrmQtiHoqv
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 262659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262659&o=json
            external_identifier: CBDB:262659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K2ekES6mKeE39N363otRZZ
        status: active
        display_name: 王儀
        merged_into_person_id: null
    - claim:
        id: c_SrCG4ue6UH8S6m_cl2qcLs
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V6BhJ85iu1tXqyuK82ksWA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OwEL7Z4OFcNa3UXBrvcGpR
          claim_id: c_SrCG4ue6UH8S6m_cl2qcLs
          source_id: s_lLovxkhoKXVAbnF84zfQgC
          stance: supports
          locator: CBDB：兄弟 王春（198362）之父／母 王宗器
          quotation: null
          interpretation_note: 由兄弟关系推断：王衡 与 王春 为同胞（CBDB 记「弟」），王春 之父／母即 王衡 之父／母。
          source:
            id: s_lLovxkhoKXVAbnF84zfQgC
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 262625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262625&o=json
            external_identifier: CBDB:262625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V6BhJ85iu1tXqyuK82ksWA
        status: active
        display_name: 王衡
        merged_into_person_id: null
    - claim:
        id: c_1NiRL0xCuARc__70O7qLqf
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gzD7cs7HQHKLfwziCooNJD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5g8UQpTphMe2lAQ4VEFJce
          claim_id: c_1NiRL0xCuARc__70O7qLqf
          source_id: s_KCoKks7GZeR2WH7dcQZvA_
          stance: supports
          locator: CBDB：兄弟 王春（198362）之父／母 王宗器
          quotation: null
          interpretation_note: 由兄弟关系推断：王儼 与 王春 为同胞（CBDB 记「兄」），王春 之父／母即 王儼 之父／母。
          source:
            id: s_KCoKks7GZeR2WH7dcQZvA_
            source_type: api_record
            title: 中国历代人物传记资料库：王儼（CBDB 262692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262692&o=json
            external_identifier: CBDB:262692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gzD7cs7HQHKLfwziCooNJD
        status: active
        display_name: 王儼
        merged_into_person_id: null
    - claim:
        id: c_pJ3-eJVdwLrlJoSmTv_ozb
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iYGxGBVaCXJEW5CYUUJwPy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MdxGaiL2cMczPOqOqQsHkR
          claim_id: c_pJ3-eJVdwLrlJoSmTv_ozb
          source_id: s_VhkGbj54cPR4RbKhOPbwhj
          stance: supports
          locator: CBDB：兄弟 王春（198362）之父／母 王宗器
          quotation: null
          interpretation_note: 由兄弟关系推断：王賢 与 王春 为同胞（CBDB 记「弟」），王春 之父／母即 王賢 之父／母。
          source:
            id: s_VhkGbj54cPR4RbKhOPbwhj
            source_type: api_record
            title: 中国历代人物传记资料库：王賢（CBDB 262637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262637&o=json
            external_identifier: CBDB:262637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iYGxGBVaCXJEW5CYUUJwPy
        status: active
        display_name: 王賢
        merged_into_person_id: null
    - claim:
        id: c__geO0ODA_5gRYJUHYoTnmL
        subject_person_id: p_psesBqxpFDwKqz2PBTA4dC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qd7ws8JMzbZJ6MD4MNPSim
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_149wUqDCHznjhCyrF7mouR
          claim_id: c__geO0ODA_5gRYJUHYoTnmL
          source_id: s_75BJQsjfzKxXUYA0L_mzPO
          stance: supports
          locator: CBDB：兄弟 王春（198362）之父／母 王宗器
          quotation: null
          interpretation_note: 由兄弟关系推断：王倫 与 王春 为同胞（CBDB 记「兄」），王春 之父／母即 王倫 之父／母。
          source:
            id: s_75BJQsjfzKxXUYA0L_mzPO
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 262681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262681&o=json
            external_identifier: CBDB:262681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qd7ws8JMzbZJ6MD4MNPSim
        status: active
        display_name: 王倫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗器

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗器 | accepted |
| bio.summary | 王宗器，明人物。景泰五年進士，籍贯濟寧州，曾任州同知。（中国历代人物传记资料库 CBDB 262581） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cnxHgvNWzCNiTbu6SVUA3o | 王春 | accepted |
| children | p_2X7wSmw2wE7k8i7edasqTV | 王鳳 | accepted |
| children | p_6MGMcTyBshjbphvYsaXUo7 | 王俊 | accepted |
| children | p_C4u12XMpyLMet89ty14rkZ | 王佐 | accepted |
| children | p_K2ekES6mKeE39N363otRZZ | 王儀 | accepted |
| children | p_V6BhJ85iu1tXqyuK82ksWA | 王衡 | accepted |
| children | p_gzD7cs7HQHKLfwziCooNJD | 王儼 | accepted |
| children | p_iYGxGBVaCXJEW5CYUUJwPy | 王賢 | accepted |
| children | p_qd7ws8JMzbZJ6MD4MNPSim | 王倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳（CBDB 262614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262614&o=json)
- [中国历代人物传记资料库：王衡（CBDB 262625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262625&o=json)
- [中国历代人物传记资料库：王俊（CBDB 262670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262670&o=json)
- [中国历代人物传记资料库：王倫（CBDB 262681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262681&o=json)
- [中国历代人物传记资料库：王賢（CBDB 262637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262637&o=json)
- [中国历代人物传记资料库：王儼（CBDB 262692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262692&o=json)
- [中国历代人物传记资料库：王儀（CBDB 262659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262659&o=json)
- [中国历代人物传记资料库：王宗器（CBDB 262581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262581&o=json)
- [中国历代人物传记资料库：王佐（CBDB 262648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262648&o=json)
