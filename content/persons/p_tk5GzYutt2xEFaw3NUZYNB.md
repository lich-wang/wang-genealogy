---
schema: wang-person/v1
id: p_tk5GzYutt2xEFaw3NUZYNB
status: active
merged_into: null
display_name: 王述
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9ve4gZikMSprMC9o4mBS8X
        subject_person_id: p_tk5GzYutt2xEFaw3NUZYNB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uGbvvNdYymmoQfbjZtRS2Y
          claim_id: c_9ve4gZikMSprMC9o4mBS8X
          source_id: s_1cZFZAPhzNENrPWZy6MEuA
          stance: supports
          locator: CBDB:30873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30873）
          source: &a1
            id: s_1cZFZAPhzNENrPWZy6MEuA
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 30873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30873&o=json
            external_identifier: CBDB:30873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V6TQ3BaT75h8T13qBi3Xfg
        subject_person_id: p_tk5GzYutt2xEFaw3NUZYNB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王述，東漢人物。籍贯祁縣。（中国历代人物传记资料库 CBDB 30873）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DN3LeGBBkb-NTubkUmErjO
          claim_id: c_V6TQ3BaT75h8T13qBi3Xfg
          source_id: s_1cZFZAPhzNENrPWZy6MEuA
          stance: supports
          locator: CBDB:30873
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
  ancestors:
    - claim:
        id: c_h42fP5rHoDS1yq7c95KHk_
        subject_person_id: p_3WsfVVB2kcuCXMvUVPJeuG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tk5GzYutt2xEFaw3NUZYNB
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U7U3kUtXzOtZhbOrH8oHEA
          claim_id: c_h42fP5rHoDS1yq7c95KHk_
          source_id: s_Rsz9UmNyr6ZSodvQUz2vQp
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王述 ⇄ 高祖;四世祖 王殷）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Rsz9UmNyr6ZSodvQUz2vQp
            source_type: api_record
            title: 中国历代人物传记资料库：王殷（CBDB 30872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30872&o=json
            external_identifier: CBDB:30872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.041Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3WsfVVB2kcuCXMvUVPJeuG
        status: active
        display_name: 王殷
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王述

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王述 | accepted |
| bio.summary | 王述，東漢人物。籍贯祁縣。（中国历代人物传记资料库 CBDB 30873） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_3WsfVVB2kcuCXMvUVPJeuG | 王殷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王述（CBDB 30873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30873&o=json)
- [中国历代人物传记资料库：王殷（CBDB 30872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30872&o=json)
