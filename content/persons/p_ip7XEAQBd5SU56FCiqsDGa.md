---
schema: wang-person/v1
id: p_ip7XEAQBd5SU56FCiqsDGa
status: active
merged_into: null
display_name: 王受元
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iFFMD2s93ZVioV2HPjKh5L
        subject_person_id: p_ip7XEAQBd5SU56FCiqsDGa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王受元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TycmZuDNeXB3DNzvqKU65f
          claim_id: c_iFFMD2s93ZVioV2HPjKh5L
          source_id: s_4KBnTR4spt4bKBAEPaTgBk
          stance: supports
          locator: CBDB:555107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555107）
          source: &a1
            id: s_4KBnTR4spt4bKBAEPaTgBk
            source_type: api_record
            title: 中国历代人物传记资料库：王受元（CBDB 555107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555107&o=json
            external_identifier: CBDB:555107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P2qid33Dnh2dGrxbsH2ZgN
        subject_person_id: p_ip7XEAQBd5SU56FCiqsDGa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王受元，明人物。籍贯武功。（中国历代人物传记资料库 CBDB 555107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_li4SU-TBECtxl6AK7-vNLy
          claim_id: c_P2qid33Dnh2dGrxbsH2ZgN
          source_id: s_4KBnTR4spt4bKBAEPaTgBk
          stance: supports
          locator: CBDB:555107
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_l_iZ73O0VYAK77PNrISNrI
        subject_person_id: p_fUrkW6ozGrAosrVsTorpqL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ip7XEAQBd5SU56FCiqsDGa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z0gHzs8S6noLqg1wbZkFev
          claim_id: c_l_iZ73O0VYAK77PNrISNrI
          source_id: s_JHhmqNMAL3cz2t6ShErLh5
          stance: supports
          locator: (康熙)武功縣續志，lgid=1045709：子
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
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
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
          source:
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
      object_person:
        id: p_nczT1Bx4gQZPAL8J9oF8s6
        status: active
        display_name: 王繼祖
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王受元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王受元 | accepted |
| bio.summary | 王受元，明人物。籍贯武功。（中国历代人物传记资料库 CBDB 555107） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fUrkW6ozGrAosrVsTorpqL | 王乾明 | accepted |
| ancestors | p_nczT1Bx4gQZPAL8J9oF8s6 | 王繼祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼祖（CBDB 555105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555105&o=json)
- [中国历代人物传记资料库：王乾明（CBDB 555106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555106&o=json)
- [中国历代人物传记资料库：王受元（CBDB 555107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555107&o=json)
