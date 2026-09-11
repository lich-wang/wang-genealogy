---
schema: wang-person/v1
id: p_cacqKhGmx2AukQiAPdxB5Y
status: active
merged_into: null
display_name: 任氏
revision: 1
cbdb_id: 570934
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Oqp2EMQie4tkzMcMHUBC-n
        subject_person_id: p_cacqKhGmx2AukQiAPdxB5Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 任氏，清人物。籍贯蕭山，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 570934）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vkJf9ascJimb9nwa2WiNTv
          claim_id: c_Oqp2EMQie4tkzMcMHUBC-n
          source_id: s_F-ED8JzPUxqKI0x5JnP9xu
          stance: supports
          locator: CBDB:570934
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_F-ED8JzPUxqKI0x5JnP9xu
            source_type: api_record
            title: 中国历代人物传记资料库：任氏(王琰妻)（CBDB 570934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570934&o=json
            external_identifier: CBDB:570934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LFe6WWrYJ88TCkG634dOx9
        subject_person_id: p_cacqKhGmx2AukQiAPdxB5Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 任氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gOtKA4itcgl0kEBxDw9EaN
          claim_id: c_LFe6WWrYJ88TCkG634dOx9
          source_id: s_F-ED8JzPUxqKI0x5JnP9xu
          stance: supports
          locator: CBDB:570934
          quotation: null
          interpretation_note: CBDB 明确记录的王琰配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_kpAtnyDlS7gYwFqGRXtRXD
        subject_person_id: p_5C1skPD3EAwMRib3Pa7hmf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cacqKhGmx2AukQiAPdxB5Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AWbNTAO9J5T0RjUxp0JzVS
          claim_id: c_kpAtnyDlS7gYwFqGRXtRXD
          source_id: s_F-ED8JzPUxqKI0x5JnP9xu
          stance: supports
          locator: 紹興府志:八十卷，lgid=316863：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5C1skPD3EAwMRib3Pa7hmf
        status: active
        display_name: 王琰
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 任氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 任氏，清人物。籍贯蕭山，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 570934） | accepted |
| name.primary | 任氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_5C1skPD3EAwMRib3Pa7hmf | 王琰 | accepted |

## 外部来源

- [中国历代人物传记资料库：任氏(王琰妻)（CBDB 570934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570934&o=json)
