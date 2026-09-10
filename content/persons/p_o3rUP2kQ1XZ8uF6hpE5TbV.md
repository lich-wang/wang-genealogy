---
schema: wang-person/v1
id: p_o3rUP2kQ1XZ8uF6hpE5TbV
status: active
merged_into: null
display_name: 王恢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BPaP577CYd4vnLDZRrrrbB
        subject_person_id: p_o3rUP2kQ1XZ8uF6hpE5TbV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vbqLUQKvSBQT2fqCGTEDmj
          claim_id: c_BPaP577CYd4vnLDZRrrrbB
          source_id: s_tFzDULdCMkmeKGi2oTM7eH
          stance: supports
          locator: CBDB:311205
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311205）
          source: &a1
            id: s_tFzDULdCMkmeKGi2oTM7eH
            source_type: api_record
            title: 中国历代人物传记资料库：王恢（CBDB 311205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311205&o=json
            external_identifier: CBDB:311205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8VygDpedFFLhc689QFwCiT
        subject_person_id: p_o3rUP2kQ1XZ8uF6hpE5TbV
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
        - id: cs_79TTtPxDa57PrzwGRJ2yN7
          claim_id: c_8VygDpedFFLhc689QFwCiT
          source_id: s_tFzDULdCMkmeKGi2oTM7eH
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
          source: &a2
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
        id: p_hsrd5jGJNsGh8XhCPGY3RN
        status: active
        display_name: 王訓
        merged_into_person_id: null
  children:
    - claim:
        id: c_1uE_tPyaLic2lSv2TO3vy0
        subject_person_id: p_o3rUP2kQ1XZ8uF6hpE5TbV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CvzpEJfQqQbdZFgH5SKxcJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sOsOO8ba5Wy-X506L0NnqE
          claim_id: c_1uE_tPyaLic2lSv2TO3vy0
          source_id: s_ZeEXZ4gqmGctbEfXb8vPv6
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十五名：曾祖、祖父、父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_CvzpEJfQqQbdZFgH5SKxcJ
        status: active
        display_name: 王時雨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hsrd5jGJNsGh8XhCPGY3RN | 王訓 | accepted |
| children | p_CvzpEJfQqQbdZFgH5SKxcJ | 王時雨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恢（CBDB 311205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311205&o=json)
- [中国历代人物传记资料库：王任用（CBDB 203867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203867&o=json)
