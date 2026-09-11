---
schema: wang-person/v1
id: p_RrLAmAJ53wbERRsLzaVq3N
status: active
merged_into: null
display_name: 王煒
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7cCF3Hbq22yGHAoWoGT78r
        subject_person_id: p_RrLAmAJ53wbERRsLzaVq3N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6q3NCoP1PKwdMhEpQgegFS
          claim_id: c_7cCF3Hbq22yGHAoWoGT78r
          source_id: s_ueKRmgQtBBGaX8bNh3YAmE
          stance: supports
          locator: CBDB:56203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56203）
          source: &a1
            id: s_ueKRmgQtBBGaX8bNh3YAmE
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 56203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56203&o=json
            external_identifier: CBDB:56203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5w5ctsNhSef47r29pdjriF
        subject_person_id: p_RrLAmAJ53wbERRsLzaVq3N
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1620年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F7DecpEL4J5LEW9FRQQvYF
          claim_id: c_5w5ctsNhSef47r29pdjriF
          source_id: s_ueKRmgQtBBGaX8bNh3YAmE
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
        id: c_SeCBB7PDz7hkB4T8eFVV7C
        subject_person_id: p_RrLAmAJ53wbERRsLzaVq3N
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1661年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1iEoX8cNewDVEpAgTJjbHk
          claim_id: c_SeCBB7PDz7hkB4T8eFVV7C
          source_id: s_ueKRmgQtBBGaX8bNh3YAmE
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
        id: c_Ci5Sz9QJaCeGnzCKattQg2
        subject_person_id: p_RrLAmAJ53wbERRsLzaVq3N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u8T8TNHCQvTyZqLH7SqQxP
          claim_id: c_Ci5Sz9QJaCeGnzCKattQg2
          source_id: s_ueKRmgQtBBGaX8bNh3YAmE
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
        id: c_Gl4hYoh_aFg-dJW5HAjjWo
        subject_person_id: p_HXk3y1PfVW8CfdPTWH9M9P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RrLAmAJ53wbERRsLzaVq3N
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tz8jr35VKV8HHE19utJA29
          claim_id: c_Gl4hYoh_aFg-dJW5HAjjWo
          source_id: s_ueKRmgQtBBGaX8bNh3YAmE
          stance: supports
          locator: "海鹽縣志: 二十二卷(光緒)，lgid=294177：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HXk3y1PfVW8CfdPTWH9M9P
        status: active
        display_name: 王家穎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_dalq94Tn_r4wtVDTsnmBFJ
        subject_person_id: p_RrLAmAJ53wbERRsLzaVq3N
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_dAPM2wMaNCnVqKPPY9ExnC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KSPeDGGrclHU5SQ-Gonh1Z
          claim_id: c_dalq94Tn_r4wtVDTsnmBFJ
          source_id: s_-dUmIXED21HLXEZXHIexJi
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #659, HuWenKai #242：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_-dUmIXED21HLXEZXHIexJi
            source_type: api_record
            title: 中国历代人物传记资料库：陳光縡（CBDB 692772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692772&o=json
            external_identifier: CBDB:692772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dAPM2wMaNCnVqKPPY9ExnC
        status: active
        display_name: 陳光縡
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_hGCWLMFU1ACV5wHgZeGjA1
        subject_person_id: p_nxJFc4B8M3dbCmgETXFL25
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RrLAmAJ53wbERRsLzaVq3N
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k2ZLuKfn_SLfjX_WXvWb5j
          claim_id: c_hGCWLMFU1ACV5wHgZeGjA1
          source_id: s_ueKRmgQtBBGaX8bNh3YAmE
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #659, HuWenKai #242：祖父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nxJFc4B8M3dbCmgETXFL25
        status: active
        display_name: 王叔元
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煒 | accepted |
| birth.date | 1620年 | accepted |
| death.date | 1661年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HXk3y1PfVW8CfdPTWH9M9P | 王家穎 | accepted |
| spouses | p_dAPM2wMaNCnVqKPPY9ExnC | 陳光縡 | accepted |
| ancestors | p_nxJFc4B8M3dbCmgETXFL25 | 王叔元 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳光縡（CBDB 692772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692772&o=json)
- [中国历代人物传记资料库：王煒（CBDB 56203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56203&o=json)
