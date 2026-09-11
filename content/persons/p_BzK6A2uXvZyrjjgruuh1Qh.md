---
schema: wang-person/v1
id: p_BzK6A2uXvZyrjjgruuh1Qh
status: active
merged_into: null
display_name: 王用汲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4Pw18Dz9oNuDxRHGZPnQc
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用汲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M3sBmgHkMwDQQi94ME6mSA
          claim_id: c_b4Pw18Dz9oNuDxRHGZPnQc
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: CBDB:126494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126494）
          source: &a1
            id: s_G5Q12QpxwABQ4p3YD5nNDm
            source_type: api_record
            title: 中国历代人物传记资料库：王用汲（CBDB 126494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126494&o=json
            external_identifier: CBDB:126494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8KDid7o4CF2AkhL2YV2wQa
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1528年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vka2YQMRRovYKX5Pf6x76N
          claim_id: c_8KDid7o4CF2AkhL2YV2wQa
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
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
        id: c_ABQJbShAaoHtFjeNDKA7JF
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1593年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JCHMuuzY9rvyGQSgh6M8Mg
          claim_id: c_ABQJbShAaoHtFjeNDKA7JF
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
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
        id: c_QE6wPHpqNuEmsy1tFhPAA9
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用汲（1528年—1593年），明人物。籍贯晉江，入仕進士，曾任尚寶司卿、刑部尚書、右副都御史。（中国历代人物传记资料库 CBDB 126494）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WG_eyaX4nkfgJzYcnzxMer
          claim_id: c_QE6wPHpqNuEmsy1tFhPAA9
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: CBDB:126494
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qFDdvWYIhLFtMrUeSVjmHg
        subject_person_id: p_wFTS9Dws5nhZvJ8pXQTGVc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_imQ0z_A7RdDi6galJCy0Q-
          claim_id: c_qFDdvWYIhLFtMrUeSVjmHg
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百零四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wFTS9Dws5nhZvJ8pXQTGVc
        status: active
        display_name: 王孫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HEIMWH74PP20UqCzpJTPXf
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BNHmdAdaaaA8aHyqThEAJT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O7F5VZ63_th3rpwdYHwQxU
          claim_id: c_HEIMWH74PP20UqCzpJTPXf
          source_id: s_P4FH-W09KCOniSfvMQCxqa
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百零四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P4FH-W09KCOniSfvMQCxqa
            source_type: api_record
            title: 中国历代人物传记资料库：許氏(王用汲妻)（CBDB 335480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335480&o=json
            external_identifier: CBDB:335480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BNHmdAdaaaA8aHyqThEAJT
        status: active
        display_name: 許氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_olIyo3YMos-CfvRJOHKjiI
        subject_person_id: p_5gxVMxVHEsmyHKD9hjsbp5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WprvJwzSOPmCKVwcxxIoew
          claim_id: c_olIyo3YMos-CfvRJOHKjiI
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百零四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5gxVMxVHEsmyHKD9hjsbp5
        status: active
        display_name: 王晉和
        merged_into_person_id: null
    - claim:
        id: c_jVFZIv0ZsxrDWYe4i3lLuC
        subject_person_id: p_xpo8hw4fvJhVz9XuV1sULD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BL7rj7PHhF7F4oUMfTstQc
          claim_id: c_jVFZIv0ZsxrDWYe4i3lLuC
          source_id: s_G5Q12QpxwABQ4p3YD5nNDm
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百零四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xpo8hw4fvJhVz9XuV1sULD
        status: active
        display_name: 王治
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王用汲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用汲 | accepted |
| birth.date | 1528年 | accepted |
| death.date | 1593年 | accepted |
| bio.summary | 王用汲（1528年—1593年），明人物。籍贯晉江，入仕進士，曾任尚寶司卿、刑部尚書、右副都御史。（中国历代人物传记资料库 CBDB 126494） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wFTS9Dws5nhZvJ8pXQTGVc | 王孫 | accepted |
| spouses | p_BNHmdAdaaaA8aHyqThEAJT | 許氏 | accepted |
| ancestors | p_5gxVMxVHEsmyHKD9hjsbp5 | 王晉和 | accepted |
| ancestors | p_xpo8hw4fvJhVz9XuV1sULD | 王治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用汲（CBDB 126494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126494&o=json)
- [中国历代人物传记资料库：許氏(王用汲妻)（CBDB 335480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335480&o=json)
