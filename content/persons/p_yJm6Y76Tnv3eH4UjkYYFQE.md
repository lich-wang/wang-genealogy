---
schema: wang-person/v1
id: p_yJm6Y76Tnv3eH4UjkYYFQE
status: active
merged_into: null
display_name: 王祚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AHB3faiBaKY2nPLdA83sPr
        subject_person_id: p_yJm6Y76Tnv3eH4UjkYYFQE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KzZzTtuMq6A9NFErG7N6yc
          claim_id: c_AHB3faiBaKY2nPLdA83sPr
          source_id: s_Z4P4vdwVj1CpN67uLmVbws
          stance: supports
          locator: CBDB:298812
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298812）
          source: &a1
            id: s_Z4P4vdwVj1CpN67uLmVbws
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 298812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298812&o=json
            external_identifier: CBDB:298812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YokUethdoSL3j2iMFg1P7f
        subject_person_id: p_yJm6Y76Tnv3eH4UjkYYFQE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚，明人物。嘉靖十七年進士，曾任翰林院編修、禮部左侍郎、通議大夫。（中国历代人物传记资料库 CBDB 298812）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mZtqrHHPWxqVh5aLbpULyz
          claim_id: c_YokUethdoSL3j2iMFg1P7f
          source_id: s_Z4P4vdwVj1CpN67uLmVbws
          stance: supports
          locator: CBDB:298812
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
        id: c_A5eeE9BYz0NACSe8XDUgHH
        subject_person_id: p_yJm6Y76Tnv3eH4UjkYYFQE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_meQsI7kL-aejITcos8GR8P
          claim_id: c_A5eeE9BYz0NACSe8XDUgHH
          source_id: s_Z4P4vdwVj1CpN67uLmVbws
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sVZp7AN2wCm1EcSo9rSyTJ
        status: active
        display_name: 王健
        merged_into_person_id: null
  other: []
---

# 王祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚 | accepted |
| bio.summary | 王祚，明人物。嘉靖十七年進士，曾任翰林院編修、禮部左侍郎、通議大夫。（中国历代人物传记资料库 CBDB 298812） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_sVZp7AN2wCm1EcSo9rSyTJ | 王健 | accepted |

## 外部来源

- [中国历代人物传记资料库：王祚（CBDB 298812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298812&o=json)
