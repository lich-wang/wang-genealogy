---
schema: wang-person/v1
id: p_5hLXW3X87TB1QQN7JMKiDq
status: active
merged_into: null
display_name: 樊氏
revision: 1
cbdb_id: 330013
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6mi1AapykRnG25xzMaAjGN
        subject_person_id: p_5hLXW3X87TB1QQN7JMKiDq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 樊氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t-rRoUQfbKU88wOpzgF9M2
          claim_id: c_6mi1AapykRnG25xzMaAjGN
          source_id: s_Qt29oZ_0_x-Do2eplIHFbf
          stance: supports
          locator: CBDB:330013
          quotation: null
          interpretation_note: CBDB 明确记录的王軒配偶
          source: &a1
            id: s_Qt29oZ_0_x-Do2eplIHFbf
            source_type: api_record
            title: 中国历代人物传记资料库：樊氏(王軒妻)（CBDB 330013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330013&o=json
            external_identifier: CBDB:330013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LRjryn5aHsUzYk_95Z-YFO
        subject_person_id: p_aPcrqB9XkxSACSANyGxVsW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5hLXW3X87TB1QQN7JMKiDq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E7KSyCjVtdpf0tXZXy-pJz
          claim_id: c_LRjryn5aHsUzYk_95Z-YFO
          source_id: s_Qt29oZ_0_x-Do2eplIHFbf
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_aPcrqB9XkxSACSANyGxVsW
        status: active
        display_name: 王軒
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 樊氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 樊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_aPcrqB9XkxSACSANyGxVsW | 王軒 | accepted |

## 外部来源

- [中国历代人物传记资料库：樊氏(王軒妻)（CBDB 330013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330013&o=json)
