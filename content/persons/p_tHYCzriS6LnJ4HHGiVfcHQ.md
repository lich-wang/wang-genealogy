---
schema: wang-person/v1
id: p_tHYCzriS6LnJ4HHGiVfcHQ
status: active
merged_into: null
display_name: 王汝清
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dAVTVWuitFPpL1gw4eWWeD
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zABjm4jV5pL8TSRiRnJdZm
          claim_id: c_dAVTVWuitFPpL1gw4eWWeD
          source_id: s_H4iDGZJiekNbnssCEsjJsY
          stance: supports
          locator: CBDB:201079
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201079）
          source: &a1
            id: s_H4iDGZJiekNbnssCEsjJsY
            source_type: api_record
            title: 中国历代人物传记资料库：王汝清（CBDB 201079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201079&o=json
            external_identifier: CBDB:201079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.651Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rw6mr42i4zLZLiJ1CtYFiX
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1460年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5tawGnEN1ZytTxbuKqxwQP
          claim_id: c_rw6mr42i4zLZLiJ1CtYFiX
          source_id: s_H4iDGZJiekNbnssCEsjJsY
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
        id: c_WFwHLQ6m6yPHqFfb5E8eaA
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
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
        - id: cs_REzZ1GsBpM93xsp4AYH8eQ
          claim_id: c_WFwHLQ6m6yPHqFfb5E8eaA
          source_id: s_H4iDGZJiekNbnssCEsjJsY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_dt5J2y3tkayt_nny68JiX2
        subject_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FbvUfnrJsMZAACE7dBpnUs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c8X1Xpr9Xqsk0v8Co95E3O
          claim_id: c_dt5J2y3tkayt_nny68JiX2
          source_id: s_Ee5YLNRT2rhjRFBBFroTte
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ee5YLNRT2rhjRFBBFroTte
            source_type: api_record
            title: 中国历代人物传记资料库：王胤賢（CBDB 201978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201978&o=json
            external_identifier: CBDB:201978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.707Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FbvUfnrJsMZAACE7dBpnUs
        status: active
        display_name: 王胤賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_nfXhNCUE-DYICYGlfq0SG8
        subject_person_id: p_QogBPUoy6ogb9CeCDBCCo9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5VI43fxMtPkL2vusgeWcvZ
          claim_id: c_nfXhNCUE-DYICYGlfq0SG8
          source_id: s_azDg5oRp8H68tqdEHuMs3b
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_azDg5oRp8H68tqdEHuMs3b
            source_type: api_record
            title: 中国历代人物传记资料库：王翰（CBDB 266710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266710&o=json
            external_identifier: CBDB:266710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QogBPUoy6ogb9CeCDBCCo9
        status: active
        display_name: 王翰
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王汝清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝清 | accepted |
| birth.date | 1460年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_FbvUfnrJsMZAACE7dBpnUs | 王胤賢 | accepted |
| ancestors | p_QogBPUoy6ogb9CeCDBCCo9 | 王翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翰（CBDB 266710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266710&o=json)
- [中国历代人物传记资料库：王汝清（CBDB 201079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201079&o=json)
- [中国历代人物传记资料库：王胤賢（CBDB 201978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201978&o=json)
