---
schema: wang-person/v1
id: p_nczT1Bx4gQZPAL8J9oF8s6
status: active
merged_into: null
display_name: 王繼祖
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hexnwcMEEcyNogr74fULch
        subject_person_id: p_nczT1Bx4gQZPAL8J9oF8s6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xVkrCeAL85th4khG1tMfNT
          claim_id: c_hexnwcMEEcyNogr74fULch
          source_id: s_FpLtkm1NsAZb5xrPFdfQZ8
          stance: supports
          locator: CBDB:555105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555105）
          source: &a1
            id: s_FpLtkm1NsAZb5xrPFdfQZ8
            source_type: api_record
            title: 中国历代人物传记资料库：王繼祖（CBDB 555105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555105&o=json
            external_identifier: CBDB:555105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KUQDF2d9wfCoatTSoNDP72
        subject_person_id: p_nczT1Bx4gQZPAL8J9oF8s6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼祖，明人物。籍贯武功。（中国历代人物传记资料库 CBDB 555105）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WxtBka7dcD6Q4pA1IrCtoG
          claim_id: c_KUQDF2d9wfCoatTSoNDP72
          source_id: s_FpLtkm1NsAZb5xrPFdfQZ8
          stance: supports
          locator: CBDB:555105
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_kgjDd5XDLu5FV2b08Kg8Ub
        subject_person_id: p_nczT1Bx4gQZPAL8J9oF8s6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fUrkW6ozGrAosrVsTorpqL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4bjLHn9hgyX1FT8Cesz9Or
          claim_id: c_kgjDd5XDLu5FV2b08Kg8Ub
          source_id: s_JHhmqNMAL3cz2t6ShErLh5
          stance: supports
          locator: (康熙)武功縣續志，lgid=1045709：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JHhmqNMAL3cz2t6ShErLh5
            source_type: api_record
            title: 中国历代人物传记资料库：王乾明（CBDB 555106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555106&o=json
            external_identifier: CBDB:555106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fUrkW6ozGrAosrVsTorpqL
        status: active
        display_name: 王乾明
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_89BWMMrmx5-_wyTA3aye9y
        subject_person_id: p_nczT1Bx4gQZPAL8J9oF8s6
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yJ3tqFpnqrfbLB4rm5bw6h
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QlMWL3ZIKfAffZxc4pVHIJ
          claim_id: c_89BWMMrmx5-_wyTA3aye9y
          source_id: s_zRjnxWld4seaX__7SX9Rvq
          stance: supports
          locator: (康熙)武功縣續志，lgid=1045709：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zRjnxWld4seaX__7SX9Rvq
            source_type: api_record
            title: 中国历代人物传记资料库：郭氏(王繼祖妻)（CBDB 555109）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555109&o=json
            external_identifier: CBDB:555109
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yJ3tqFpnqrfbLB4rm5bw6h
        status: active
        display_name: 郭氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_Vub7p5jnlDfrZYpt2w41Vh
        subject_person_id: p_nczT1Bx4gQZPAL8J9oF8s6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ip7XEAQBd5SU56FCiqsDGa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kAfkfHHloGyt-b92dbRr6K
          claim_id: c_Vub7p5jnlDfrZYpt2w41Vh
          source_id: s_FpLtkm1NsAZb5xrPFdfQZ8
          stance: supports
          locator: (康熙)武功縣續志，lgid=1045709：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ip7XEAQBd5SU56FCiqsDGa
        status: active
        display_name: 王受元
        merged_into_person_id: null
    - claim:
        id: c_BVuZly0UOESfoGVo8wTa3D
        subject_person_id: p_nczT1Bx4gQZPAL8J9oF8s6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kGhjBDdewAMKtwMDXvy2ts
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C_71m3TKGvYHlRgQRKEauQ
          claim_id: c_BVuZly0UOESfoGVo8wTa3D
          source_id: s_FpLtkm1NsAZb5xrPFdfQZ8
          stance: supports
          locator: (康熙)武功縣續志，lgid=1045709：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kGhjBDdewAMKtwMDXvy2ts
        status: active
        display_name: 王良臣
        merged_into_person_id: null
  other: []
---

# 王繼祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼祖 | accepted |
| bio.summary | 王繼祖，明人物。籍贯武功。（中国历代人物传记资料库 CBDB 555105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_fUrkW6ozGrAosrVsTorpqL | 王乾明 | accepted |
| spouses | p_yJ3tqFpnqrfbLB4rm5bw6h | 郭氏 | accepted |
| descendants | p_ip7XEAQBd5SU56FCiqsDGa | 王受元 | accepted |
| descendants | p_kGhjBDdewAMKtwMDXvy2ts | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：郭氏(王繼祖妻)（CBDB 555109）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555109&o=json)
- [中国历代人物传记资料库：王繼祖（CBDB 555105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555105&o=json)
- [中国历代人物传记资料库：王乾明（CBDB 555106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555106&o=json)
