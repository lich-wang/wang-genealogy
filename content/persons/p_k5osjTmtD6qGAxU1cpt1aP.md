---
schema: wang-person/v1
id: p_k5osjTmtD6qGAxU1cpt1aP
status: active
merged_into: null
display_name: 王文
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BNkyJ86u2yCwoA1BA2uX3b
        subject_person_id: p_k5osjTmtD6qGAxU1cpt1aP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SvMNpn89je5Y8E4amqpHE6
          claim_id: c_BNkyJ86u2yCwoA1BA2uX3b
          source_id: s_bBN9NXqMhvnvJpcS9rLrBu
          stance: supports
          locator: CBDB:23475
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23475）
          source: &a1
            id: s_bBN9NXqMhvnvJpcS9rLrBu
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 23475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23475&o=json
            external_identifier: CBDB:23475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZYrxBhZZ23Bu59Lz5LmPv8
        subject_person_id: p_k5osjTmtD6qGAxU1cpt1aP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文，宋人物。籍贯長樂。（中国历代人物传记资料库 CBDB 23475）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bnv-V6NzAddQJrXJPY5Cr4
          claim_id: c_ZYrxBhZZ23Bu59Lz5LmPv8
          source_id: s_bBN9NXqMhvnvJpcS9rLrBu
          stance: supports
          locator: CBDB:23475
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EXR7SgzH0HmRQirwnCyHpT
        subject_person_id: p_XNnEJW93RJQ51JNrQsQRTJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k5osjTmtD6qGAxU1cpt1aP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NkZk1bFYvCNMe0xK1zJ3gr
          claim_id: c_EXR7SgzH0HmRQirwnCyHpT
          source_id: s_bBN9NXqMhvnvJpcS9rLrBu
          stance: supports
          locator: CBDB 双向互证（父 王彥 ⇄ 子 王文）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_XNnEJW93RJQ51JNrQsQRTJ
        status: active
        display_name: 王彥
        merged_into_person_id: null
  children:
    - claim:
        id: c_VNm8rqHlP0k_Gli8WXIQEG
        subject_person_id: p_k5osjTmtD6qGAxU1cpt1aP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TiUdEhG1LMC9f51Xgx1RW7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pyrndobAHARm0T0ldjwtPV
          claim_id: c_VNm8rqHlP0k_Gli8WXIQEG
          source_id: s_bBN9NXqMhvnvJpcS9rLrBu
          stance: supports
          locator: CBDB 双向互证（子 王鎰 ⇄ 父 王文）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_TiUdEhG1LMC9f51Xgx1RW7
        status: active
        display_name: 王鎰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_y4QFL_q8Qc0ysxcsVGXB_N
        subject_person_id: p_k5osjTmtD6qGAxU1cpt1aP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_slRd2UUE2rxjekk55k18sQ
          claim_id: c_y4QFL_q8Qc0ysxcsVGXB_N
          source_id: s_oc1QNAEk7i97afFuxniTAJ
          stance: supports
          locator: 紹興十八年同年小錄，136：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oc1QNAEk7i97afFuxniTAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 23477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23477&o=json
            external_identifier: CBDB:23477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jUfc5vCsBkQrPPCvwGCB11
        status: active
        display_name: 王堯臣
        merged_into_person_id: null
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | 王文，宋人物。籍贯長樂。（中国历代人物传记资料库 CBDB 23475） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XNnEJW93RJQ51JNrQsQRTJ | 王彥 | accepted |
| children | p_TiUdEhG1LMC9f51Xgx1RW7 | 王鎰 | accepted |
| descendants | p_jUfc5vCsBkQrPPCvwGCB11 | 王堯臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文（CBDB 23475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23475&o=json)
- [中国历代人物传记资料库：王堯臣（CBDB 23477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23477&o=json)
