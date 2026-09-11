---
schema: wang-person/v1
id: p_vV52H1GLe4mb587k9pj5Z2
status: active
merged_into: null
display_name: 王聘
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_teuF3L4PPukRDLLuRYkZr3
        subject_person_id: p_vV52H1GLe4mb587k9pj5Z2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MGL9HKtbzjyeMCFSL63qLp
          claim_id: c_teuF3L4PPukRDLLuRYkZr3
          source_id: s_TQ9N34U1Jj94n614j53RxX
          stance: supports
          locator: CBDB:207693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207693）
          source: &a1
            id: s_TQ9N34U1Jj94n614j53RxX
            source_type: api_record
            title: 中国历代人物传记资料库：王聘（CBDB 207693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207693&o=json
            external_identifier: CBDB:207693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oAULiCGMkj2vUBw8Yq4Ae1
        subject_person_id: p_vV52H1GLe4mb587k9pj5Z2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1579年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FD1Hn4VVgAJAGuFFAWvRTU
          claim_id: c_oAULiCGMkj2vUBw8Yq4Ae1
          source_id: s_TQ9N34U1Jj94n614j53RxX
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
        id: c_Hom1zEG9CyFgjPzpAxYU2v
        subject_person_id: p_vV52H1GLe4mb587k9pj5Z2
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
        - id: cs_hMo7kqjptKPTtkD4d5Pj9A
          claim_id: c_Hom1zEG9CyFgjPzpAxYU2v
          source_id: s_TQ9N34U1Jj94n614j53RxX
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
        id: c_WSjMToR4XmJm0VN3RvRcEq
        subject_person_id: p_vbmJR5uCeaqCSLSaANHLNi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vV52H1GLe4mb587k9pj5Z2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TrBfyqYzxE-wc6aO801TF7
          claim_id: c_WSjMToR4XmJm0VN3RvRcEq
          source_id: s_JPUoHK4HTPgdv3qDzUa2MG
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JPUoHK4HTPgdv3qDzUa2MG
            source_type: api_record
            title: 中国历代人物传记资料库：王朝卿（CBDB 233969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233969&o=json
            external_identifier: CBDB:233969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.733Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vbmJR5uCeaqCSLSaANHLNi
        status: active
        display_name: 王朝卿
        merged_into_person_id: null
  children:
    - claim:
        id: c_C3cnMnp96pEHAXnrz_ykLn
        subject_person_id: p_vV52H1GLe4mb587k9pj5Z2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aiXHyQMoNmuY1rAXQ9aTkS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Lm2nAyZo-Lr_N098Oq4mK
          claim_id: c_C3cnMnp96pEHAXnrz_ykLn
          source_id: s_2NFtF2XD5EBv3oUzxu9zLm
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百六十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2NFtF2XD5EBv3oUzxu9zLm
            source_type: api_record
            title: 中国历代人物传记资料库：王祚恆（CBDB 233976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233976&o=json
            external_identifier: CBDB:233976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_aiXHyQMoNmuY1rAXQ9aTkS
        status: active
        display_name: 王祚恆
        merged_into_person_id: null
    - claim:
        id: c_IUJ-0y-tg9usnzXIsVKV_d
        subject_person_id: p_vV52H1GLe4mb587k9pj5Z2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_egQWUvKKUHGHFH1FFpyHWW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JZSG94r-RKLDfbY2L_HegE
          claim_id: c_IUJ-0y-tg9usnzXIsVKV_d
          source_id: s_V5AsQCX7y4VPPoYDQsMfz3
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百六十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_V5AsQCX7y4VPPoYDQsMfz3
            source_type: api_record
            title: 中国历代人物传记资料库：王祚延（CBDB 233975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233975&o=json
            external_identifier: CBDB:233975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_egQWUvKKUHGHFH1FFpyHWW
        status: active
        display_name: 王祚延
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_dgGSW6hHzqJRwYtrOMncbH
        subject_person_id: p_98GBPWfNFuuoAeABhuDPBA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vV52H1GLe4mb587k9pj5Z2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XoL6ZxlxAPWsYWsQvlvv3c
          claim_id: c_dgGSW6hHzqJRwYtrOMncbH
          source_id: s_7k1EoZGNBZVPSjoYnbc9EA
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百六十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7k1EoZGNBZVPSjoYnbc9EA
            source_type: api_record
            title: 中国历代人物传记资料库：王民（CBDB 233966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233966&o=json
            external_identifier: CBDB:233966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.732Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_98GBPWfNFuuoAeABhuDPBA
        status: active
        display_name: 王民
        merged_into_person_id: null
    - claim:
        id: c_1ozKslg5NrVYAj6-jtnLu8
        subject_person_id: p_CCMccR4P954q1f51XxRvrB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vV52H1GLe4mb587k9pj5Z2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y_fCOmO3U5pflBqpvGi3LC
          claim_id: c_1ozKslg5NrVYAj6-jtnLu8
          source_id: s_cV45fMwS4excYgkeT5Ei1i
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第一百六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cV45fMwS4excYgkeT5Ei1i
            source_type: api_record
            title: 中国历代人物传记资料库：王仕昂（CBDB 233967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233967&o=json
            external_identifier: CBDB:233967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_CCMccR4P954q1f51XxRvrB
        status: active
        display_name: 王仕昂
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聘 | accepted |
| birth.date | 1579年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vbmJR5uCeaqCSLSaANHLNi | 王朝卿 | accepted |
| children | p_aiXHyQMoNmuY1rAXQ9aTkS | 王祚恆 | accepted |
| children | p_egQWUvKKUHGHFH1FFpyHWW | 王祚延 | accepted |
| ancestors | p_98GBPWfNFuuoAeABhuDPBA | 王民 | accepted |
| ancestors | p_CCMccR4P954q1f51XxRvrB | 王仕昂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝卿（CBDB 233969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233969&o=json)
- [中国历代人物传记资料库：王民（CBDB 233966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233966&o=json)
- [中国历代人物传记资料库：王聘（CBDB 207693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207693&o=json)
- [中国历代人物传记资料库：王仕昂（CBDB 233967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233967&o=json)
- [中国历代人物传记资料库：王祚恆（CBDB 233976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233976&o=json)
- [中国历代人物传记资料库：王祚延（CBDB 233975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233975&o=json)
