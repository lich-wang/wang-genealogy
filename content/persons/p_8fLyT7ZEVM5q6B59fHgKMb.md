---
schema: wang-person/v1
id: p_8fLyT7ZEVM5q6B59fHgKMb
status: active
merged_into: null
display_name: 王鎬
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8KP79y6sRsVECSWrLhjUDa
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dTqJnDEjQnReHg6pHH7Hqt
          claim_id: c_8KP79y6sRsVECSWrLhjUDa
          source_id: s_zQhfYZPNcGJvYKAzCCCRiq
          stance: supports
          locator: CBDB:126866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126866）
          source: &a1
            id: s_zQhfYZPNcGJvYKAzCCCRiq
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 126866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126866&o=json
            external_identifier: CBDB:126866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a18HN8D5mXH6szPyCLohr2
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬，明人物。明清進士進士，籍贯灤州，入仕進士，曾任巡撫右僉都御史。（中国历代人物传记资料库 CBDB 126866）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dZp09kzMzXmBNzC63KA2jG
          claim_id: c_a18HN8D5mXH6szPyCLohr2
          source_id: s_zQhfYZPNcGJvYKAzCCCRiq
          stance: supports
          locator: CBDB:126866
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fNrU73mImhYyMxqxoO9bBd
        subject_person_id: p_gGs45wBLrz1PrQ7nJg3Ni8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Kl4Ky_cPKQXecj3YfJY1U
          claim_id: c_fNrU73mImhYyMxqxoO9bBd
          source_id: s_zQhfYZPNcGJvYKAzCCCRiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gGs45wBLrz1PrQ7nJg3Ni8
        status: active
        display_name: 王璋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BBKLi0iOkivuXy2odx3elb
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fgG89fq4pFU8AiEJQ5s24P
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzmS7-jvN45YaqMD9f20Bh
          claim_id: c_BBKLi0iOkivuXy2odx3elb
          source_id: s_1ekqbWw_onRm52cOn7TxtA
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1ekqbWw_onRm52cOn7TxtA
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王鎬妻)（CBDB 290154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290154&o=json
            external_identifier: CBDB:290154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fgG89fq4pFU8AiEJQ5s24P
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_yBO9jNe3UVFX6nbztsqu02
        subject_person_id: p_wKtE8zuLqyCAcUgFGmKLDZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BWCZhJLAPGDTK_YGg3FKxh
          claim_id: c_yBO9jNe3UVFX6nbztsqu02
          source_id: s_zQhfYZPNcGJvYKAzCCCRiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wKtE8zuLqyCAcUgFGmKLDZ
        status: active
        display_name: 王貴
        merged_into_person_id: null
    - claim:
        id: c_t-CWTPMPiQduFeVkhwc5i_
        subject_person_id: p_LG1H4ZU953vvpEe2T5EbAA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__LebMCPWIL5ZBgM2SqUZJ4
          claim_id: c_t-CWTPMPiQduFeVkhwc5i_
          source_id: s_zQhfYZPNcGJvYKAzCCCRiq
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LG1H4ZU953vvpEe2T5EbAA
        status: active
        display_name: 王暹
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_tDoBKDO7r6o7OApVCLqnwM
        subject_person_id: p_2Fm2iQDbmFbKHLVyH3V4kJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_15U5jecbPEhOv9jRWoCZSP
          claim_id: c_tDoBKDO7r6o7OApVCLqnwM
          source_id: s_XkdbUUG3l4m3cGoxSsXjgh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126866 王鎬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XkdbUUG3l4m3cGoxSsXjgh
            source_type: api_record
            title: 中国历代人物传记资料库：王鎧（CBDB 290155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290155&o=json
            external_identifier: CBDB:290155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Fm2iQDbmFbKHLVyH3V4kJ
        status: active
        display_name: 王鎧
        merged_into_person_id: null
    - claim:
        id: c_kNylusrRmJ5BOOdGWk4EJS
        subject_person_id: p_4kvJ86QQSjr1B343YbNCZP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I9Odbs6LODH3cg8-3O7HTJ
          claim_id: c_kNylusrRmJ5BOOdGWk4EJS
          source_id: s_60_zIxBDL5-OHUbugcndgj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126866 王鎬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_60_zIxBDL5-OHUbugcndgj
            source_type: api_record
            title: 中国历代人物传记资料库：王鉦（CBDB 290157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290157&o=json
            external_identifier: CBDB:290157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4kvJ86QQSjr1B343YbNCZP
        status: active
        display_name: 王鉦
        merged_into_person_id: null
    - claim:
        id: c_RQPSXvBU3cEq6v-Dd8quXs
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AKJXYFdDqBy4XJSPu7jiys
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7NGaRUjnsuABYf87G34DTA
          claim_id: c_RQPSXvBU3cEq6v-Dd8quXs
          source_id: s_oSLWl9cKrcIqRcBdgXSe6W
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126866 王鎬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oSLWl9cKrcIqRcBdgXSe6W
            source_type: api_record
            title: 中国历代人物传记资料库：王鍔（CBDB 290160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290160&o=json
            external_identifier: CBDB:290160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AKJXYFdDqBy4XJSPu7jiys
        status: active
        display_name: 王鍔
        merged_into_person_id: null
    - claim:
        id: c_6cJiI9A7yuLtWFfzmoN-tc
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BTehwp42KiMdKffd7GA7q3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_24bbyHPGmVMgrS9E0N4wLt
          claim_id: c_6cJiI9A7yuLtWFfzmoN-tc
          source_id: s_GwI-0uYJgE_Wye1Ab98y4t
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126866 王鎬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GwI-0uYJgE_Wye1Ab98y4t
            source_type: api_record
            title: 中国历代人物传记资料库：王鈿（CBDB 290159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290159&o=json
            external_identifier: CBDB:290159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BTehwp42KiMdKffd7GA7q3
        status: active
        display_name: 王鈿
        merged_into_person_id: null
    - claim:
        id: c_e1tPitr48ikei1q9rekVBe
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_F1ds9LMASFJvYHkcnvDo4m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-YZFQuD7SZfMfXDGI0I2L2
          claim_id: c_e1tPitr48ikei1q9rekVBe
          source_id: s_gNVyX_xaqCH1M_-iNyf7e7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126866 王鎬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gNVyX_xaqCH1M_-iNyf7e7
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 290158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290158&o=json
            external_identifier: CBDB:290158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F1ds9LMASFJvYHkcnvDo4m
        status: active
        display_name: 王鏞
        merged_into_person_id: null
    - claim:
        id: c_cjCTyT0sm_hoMHajNQDX4m
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HFBQavfgQLSJXDLPGZSadz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HGWMsfuBbT8qI2Nh9FB74Z
          claim_id: c_cjCTyT0sm_hoMHajNQDX4m
          source_id: s_EeqZxOU2h64d1NdyClYYqt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126866 王鎬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EeqZxOU2h64d1NdyClYYqt
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 290156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290156&o=json
            external_identifier: CBDB:290156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HFBQavfgQLSJXDLPGZSadz
        status: active
        display_name: 王鑰
        merged_into_person_id: null
    - claim:
        id: c_Q6ukkGppwbXKi44I_O--hX
        subject_person_id: p_8fLyT7ZEVM5q6B59fHgKMb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QkqCDKLBd8RA2R89nAgixU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XJxA7AL74o9dxVKnLnkep0
          claim_id: c_Q6ukkGppwbXKi44I_O--hX
          source_id: s_K60a-4w6kwjvgsuZdi_IyF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126866 王鎬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_K60a-4w6kwjvgsuZdi_IyF
            source_type: api_record
            title: 中国历代人物传记资料库：王鍊（CBDB 290161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290161&o=json
            external_identifier: CBDB:290161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QkqCDKLBd8RA2R89nAgixU
        status: active
        display_name: 王鍊
        merged_into_person_id: null
---

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | 王鎬，明人物。明清進士進士，籍贯灤州，入仕進士，曾任巡撫右僉都御史。（中国历代人物传记资料库 CBDB 126866） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gGs45wBLrz1PrQ7nJg3Ni8 | 王璋 | accepted |
| spouses | p_fgG89fq4pFU8AiEJQ5s24P | 陳氏 | accepted |
| ancestors | p_wKtE8zuLqyCAcUgFGmKLDZ | 王貴 | accepted |
| ancestors | p_LG1H4ZU953vvpEe2T5EbAA | 王暹 | accepted |
| other | p_2Fm2iQDbmFbKHLVyH3V4kJ | 王鎧 | accepted |
| other | p_4kvJ86QQSjr1B343YbNCZP | 王鉦 | accepted |
| other | p_AKJXYFdDqBy4XJSPu7jiys | 王鍔 | accepted |
| other | p_BTehwp42KiMdKffd7GA7q3 | 王鈿 | accepted |
| other | p_F1ds9LMASFJvYHkcnvDo4m | 王鏞 | accepted |
| other | p_HFBQavfgQLSJXDLPGZSadz | 王鑰 | accepted |
| other | p_QkqCDKLBd8RA2R89nAgixU | 王鍊 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王鎬妻)（CBDB 290154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290154&o=json)
- [中国历代人物传记资料库：王鍔（CBDB 290160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290160&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 126866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126866&o=json)
- [中国历代人物传记资料库：王鎧（CBDB 290155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290155&o=json)
- [中国历代人物传记资料库：王鍊（CBDB 290161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290161&o=json)
- [中国历代人物传记资料库：王鈿（CBDB 290159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290159&o=json)
- [中国历代人物传记资料库：王鑰（CBDB 290156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290156&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 290158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290158&o=json)
- [中国历代人物传记资料库：王鉦（CBDB 290157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290157&o=json)
