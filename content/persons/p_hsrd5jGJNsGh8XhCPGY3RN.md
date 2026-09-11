---
schema: wang-person/v1
id: p_hsrd5jGJNsGh8XhCPGY3RN
status: active
merged_into: null
display_name: 王訓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jFnBorGRotqv4SaAC5qp1o
        subject_person_id: p_hsrd5jGJNsGh8XhCPGY3RN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uTXT7fzPa1XkUDg2S1MxX7
          claim_id: c_jFnBorGRotqv4SaAC5qp1o
          source_id: s_mLDAiBAt3iu2BUkQygLUpA
          stance: supports
          locator: CBDB:311204
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311204）
          source: &a1
            id: s_mLDAiBAt3iu2BUkQygLUpA
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 311204）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311204&o=json
            external_identifier: CBDB:311204
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LfHppmGPVhNya6gkJXv6Cr
        subject_person_id: p_hsrd5jGJNsGh8XhCPGY3RN
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
        - id: cs_97nhP8DTLD7P614yv1Q4VW
          claim_id: c_LfHppmGPVhNya6gkJXv6Cr
          source_id: s_mLDAiBAt3iu2BUkQygLUpA
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
        id: c_b-fbNGB0IN5UIeM43TKYfH
        subject_person_id: p_hsrd5jGJNsGh8XhCPGY3RN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o3rUP2kQ1XZ8uF6hpE5TbV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KcJjhte2_YvyKhj20NJlog
          claim_id: c_b-fbNGB0IN5UIeM43TKYfH
          source_id: s_ZeEXZ4gqmGctbEfXb8vPv6
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十五名：曾祖、祖父、父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZeEXZ4gqmGctbEfXb8vPv6
            source_type: api_record
            title: 中国历代人物传记资料库：王任用（CBDB 203867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203867&o=json
            external_identifier: CBDB:203867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_o3rUP2kQ1XZ8uF6hpE5TbV
        status: active
        display_name: 王恢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_1uFS9XDnGDNw4OzbIdFbn9
        subject_person_id: p_hsrd5jGJNsGh8XhCPGY3RN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_18GnPkpUEcGNgbFCDg5gah
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y9P4WBdPS-XPEeimx2KAPe
          claim_id: c_1uFS9XDnGDNw4OzbIdFbn9
          source_id: s_mLDAiBAt3iu2BUkQygLUpA
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_18GnPkpUEcGNgbFCDg5gah
        status: active
        display_name: 王任用
        merged_into_person_id: null
  other: []
---

# 王訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_o3rUP2kQ1XZ8uF6hpE5TbV | 王恢 | accepted |
| descendants | p_18GnPkpUEcGNgbFCDg5gah | 王任用 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任用（CBDB 203867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203867&o=json)
- [中国历代人物传记资料库：王訓（CBDB 311204）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311204&o=json)
