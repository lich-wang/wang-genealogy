---
schema: wang-person/v1
id: p_GCFGFLbb5w3812Ph1sajEv
status: active
merged_into: null
display_name: 王秉誠
cbdb_id: 272758
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pz87W6gwdTHWJMxFSCCuGJ
        subject_person_id: p_GCFGFLbb5w3812Ph1sajEv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉誠，明人物。弘治十八年進士，籍贯西充。（中国历代人物传记资料库 CBDB 272758）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_9xtRGe21o5mn_ucj090Vzv
          claim_id: c_pz87W6gwdTHWJMxFSCCuGJ
          source_id: s_n9KAN3dERKps71FHSC6Bhg
          stance: supports
          locator: CBDB:272758
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_n9KAN3dERKps71FHSC6Bhg
            source_type: api_record
            title: 中国历代人物传记资料库：王秉誠（CBDB 272758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272758&o=json
            external_identifier: CBDB:272758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_q5kTiA76LeZs333bvDRinF
        subject_person_id: p_GCFGFLbb5w3812Ph1sajEv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xSSXUfFKsE5MFaY25Ufhnc
          claim_id: c_q5kTiA76LeZs333bvDRinF
          source_id: s_n9KAN3dERKps71FHSC6Bhg
          stance: supports
          locator: CBDB:272758
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-Q4XM2EU25np6wrBqV8FF8
        subject_person_id: p_xTGz6CSCfnLnyJ3himBvrU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GCFGFLbb5w3812Ph1sajEv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HsIkW_jOSBPmPHZ_vuSfN4
          claim_id: c_-Q4XM2EU25np6wrBqV8FF8
          source_id: s_-qG6cNBc0ml3E8HertgXvW
          stance: supports
          locator: CBDB：兄弟 王秉良（201458）之父／母 王俊
          quotation: null
          interpretation_note: 由兄弟关系推断：王秉誠 与 王秉良 为同胞（CBDB 记「弟」），王秉良 之父／母即 王秉誠 之父／母。
          source:
            id: s_-qG6cNBc0ml3E8HertgXvW
            source_type: api_record
            title: 中国历代人物传记资料库：王秉誠（CBDB 272758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272758&o=json
            external_identifier: CBDB:272758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xTGz6CSCfnLnyJ3himBvrU
        status: active
        display_name: 王俊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5AVjgCrt9WcXFY1e0NKP_i
        subject_person_id: p_AJ36QsHYvNFFPiM32NAShM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GCFGFLbb5w3812Ph1sajEv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TjYnswrWrM4Xt0KuGez08b
          claim_id: c_5AVjgCrt9WcXFY1e0NKP_i
          source_id: s_-qG6cNBc0ml3E8HertgXvW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201458 王秉良）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-qG6cNBc0ml3E8HertgXvW
            source_type: api_record
            title: 中国历代人物传记资料库：王秉誠（CBDB 272758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272758&o=json
            external_identifier: CBDB:272758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AJ36QsHYvNFFPiM32NAShM
        status: active
        display_name: 王秉良
        merged_into_person_id: null
---

# 王秉誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王秉誠，明人物。弘治十八年進士，籍贯西充。（中国历代人物传记资料库 CBDB 272758） | accepted |
| name.primary | 王秉誠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xTGz6CSCfnLnyJ3himBvrU | 王俊 | accepted |
| other | p_AJ36QsHYvNFFPiM32NAShM | 王秉良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉誠（CBDB 272758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272758&o=json)
