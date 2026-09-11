---
schema: wang-person/v1
id: p_VwN7eG86JDxNDZrGUdF1Q5
status: active
merged_into: null
display_name: 王麟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2VJKSydCwB8ucMv3gR6ZPT
        subject_person_id: p_VwN7eG86JDxNDZrGUdF1Q5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ScsoTYcGhsyXJviqdU5jxj
          claim_id: c_2VJKSydCwB8ucMv3gR6ZPT
          source_id: s_BsgioAgQi2bNfV41XYhCP9
          stance: supports
          locator: CBDB:232520
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（232520）
          source: &a1
            id: s_BsgioAgQi2bNfV41XYhCP9
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 232520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232520&o=json
            external_identifier: CBDB:232520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nbGARZDrr1TUbcbk5ok9iV
        subject_person_id: p_VwN7eG86JDxNDZrGUdF1Q5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，明人物。萬曆五年進士，曾任戶部主事、教授。（中国历代人物传记资料库 CBDB 232520）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GXRQpoqK0ck6_haZzqt9DU
          claim_id: c_nbGARZDrr1TUbcbk5ok9iV
          source_id: s_BsgioAgQi2bNfV41XYhCP9
          stance: supports
          locator: CBDB:232520
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_Wg_5pTVcWJ5GE8vBDUdU1V
        subject_person_id: p_VwN7eG86JDxNDZrGUdF1Q5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5r1wESpKqnWgbhR5AChbjE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AXDvffMCx7bwj-I_Lmwn5Y
          claim_id: c_Wg_5pTVcWJ5GE8vBDUdU1V
          source_id: s_BsgioAgQi2bNfV41XYhCP9
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百五十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
    - claim:
        id: c_IdcXkH2Hb_aPLcqaFwtLdE
        subject_person_id: p_VwN7eG86JDxNDZrGUdF1Q5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6VHJbLTrkCw69Y2Ho1sBH7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rm1-2ZSIK-NrB8PbmDgakh
          claim_id: c_IdcXkH2Hb_aPLcqaFwtLdE
          source_id: s_BsgioAgQi2bNfV41XYhCP9
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百九十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6VHJbLTrkCw69Y2Ho1sBH7
        status: active
        display_name: 王象节
        merged_into_person_id: null
  other: []
---

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟 | accepted |
| bio.summary | 王麟，明人物。萬曆五年進士，曾任戶部主事、教授。（中国历代人物传记资料库 CBDB 232520） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |
| descendants | p_6VHJbLTrkCw69Y2Ho1sBH7 | 王象节 | accepted |

## 外部来源

- [中国历代人物传记资料库：王麟（CBDB 232520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232520&o=json)
