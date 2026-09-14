---
schema: wang-person/v1
id: p_zPJV9uPvg66nyW635J36Ep
status: active
merged_into: null
display_name: 王中行
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CghzdekFd9VoFxCCCLeeA3
        subject_person_id: p_zPJV9uPvg66nyW635J36Ep
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中行
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LE2hNavrunPfGTfNpGKqxz
          claim_id: c_CghzdekFd9VoFxCCCLeeA3
          source_id: s_EcS2YebY2R4Her2hQjAiGR
          stance: supports
          locator: CBDB:3942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3942）
          source: &a1
            id: s_EcS2YebY2R4Her2hQjAiGR
            source_type: api_record
            title: 中国历代人物传记资料库：王中行（CBDB 3942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3942&o=json
            external_identifier: CBDB:3942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.421Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KThmWFBT2EHC77CkSkT4eY
        subject_person_id: p_zPJV9uPvg66nyW635J36Ep
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1158年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HgLTK7hJ2bKQPQzuCrGksm
          claim_id: c_KThmWFBT2EHC77CkSkT4eY
          source_id: s_EcS2YebY2R4Her2hQjAiGR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oZr1BKjcqyEZ4z48BYh3oj
        subject_person_id: p_zPJV9uPvg66nyW635J36Ep
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1210年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vDVgUzDV9AKSyTT4wV8uH5
          claim_id: c_oZr1BKjcqyEZ4z48BYh3oj
          source_id: s_EcS2YebY2R4Her2hQjAiGR
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
        id: c_VybtM4aNxK6KudT7meqXSg
        subject_person_id: p_zPJV9uPvg66nyW635J36Ep
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王中行（1158年—1210年），宋人物。籍贯餘姚，入仕恩蔭、蔭補，曾任朝奉郎、奉議郎、縣尉。（中国历代人物传记资料库 CBDB 3942）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aXv8hF2fGnmOqEtYYe-Ufx
          claim_id: c_VybtM4aNxK6KudT7meqXSg
          source_id: s_EcS2YebY2R4Her2hQjAiGR
          stance: supports
          locator: CBDB:3942
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LRSijzvFYKoL-raGy4bRyq
        subject_person_id: p_zPJV9uPvg66nyW635J36Ep
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JZoHTFUFRha7fZ9F5A32Rd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2sYK-9TXGA5OCOOVDpdBD-
          claim_id: c_LRSijzvFYKoL-raGy4bRyq
          source_id: s_4QAcEqn4mQ1o5QfLcRFPW7
          stance: supports
          locator: CBDB 亲属：父（KinPerson 3942）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_4QAcEqn4mQ1o5QfLcRFPW7
            source_type: api_record
            title: 中国历代人物传记资料库：王叔達（CBDB 35946）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35946&o=json
            external_identifier: CBDB:35946
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JZoHTFUFRha7fZ9F5A32Rd
        status: active
        display_name: 王叔達
        merged_into_person_id: null
    - claim:
        id: c__dBFUtb7HYXL0o4Ln-ClvV
        subject_person_id: p_zPJV9uPvg66nyW635J36Ep
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TbUog4RqmxrsWdQFmfF4gT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yul0V1lPVX8jN8i8O_DnKa
          claim_id: c__dBFUtb7HYXL0o4Ln-ClvV
          source_id: s_o6OYuuluCKGBIEe6NkWUAX
          stance: supports
          locator: CBDB 亲属：父（KinPerson 3942）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_o6OYuuluCKGBIEe6NkWUAX
            source_type: api_record
            title: 中国历代人物传记资料库：王大臨（CBDB 35589）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35589&o=json
            external_identifier: CBDB:35589
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TbUog4RqmxrsWdQFmfF4gT
        status: active
        display_name: 王大臨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_oFFVxe88YF1hOWT3Xt2SNW
        subject_person_id: p_c13t1gAnQni4prMz3DPJbk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zPJV9uPvg66nyW635J36Ep
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NTn_Md7tacuXXCWYIdXT0_
          claim_id: c_oFFVxe88YF1hOWT3Xt2SNW
          source_id: s_vBkKyzpaPfffzvS2LjjmEL
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1444：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vBkKyzpaPfffzvS2LjjmEL
            source_type: api_record
            title: 中国历代人物传记资料库：王俁（CBDB 1932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1932&o=json
            external_identifier: CBDB:1932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_c13t1gAnQni4prMz3DPJbk
        status: active
        display_name: 王俁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王中行

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王中行 | accepted |
| birth.date | 1158年 | accepted |
| death.date | 1210年 | accepted |
| bio.summary | 王中行（1158年—1210年），宋人物。籍贯餘姚，入仕恩蔭、蔭補，曾任朝奉郎、奉議郎、縣尉。（中国历代人物传记资料库 CBDB 3942） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JZoHTFUFRha7fZ9F5A32Rd | 王叔達 | accepted |
| children | p_TbUog4RqmxrsWdQFmfF4gT | 王大臨 | accepted |
| ancestors | p_c13t1gAnQni4prMz3DPJbk | 王俁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大臨（CBDB 35589）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35589&o=json)
- [中国历代人物传记资料库：王叔達（CBDB 35946）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35946&o=json)
- [中国历代人物传记资料库：王俁（CBDB 1932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1932&o=json)
- [中国历代人物传记资料库：王中行（CBDB 3942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3942&o=json)
