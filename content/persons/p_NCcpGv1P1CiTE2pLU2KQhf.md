---
schema: wang-person/v1
id: p_NCcpGv1P1CiTE2pLU2KQhf
status: active
merged_into: null
display_name: 王同人
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vcwLDgae6UnvFtRdL7JSC6
        subject_person_id: p_NCcpGv1P1CiTE2pLU2KQhf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同人
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G96JnXRETEKfX6MkNe68ih
          claim_id: c_vcwLDgae6UnvFtRdL7JSC6
          source_id: s_JSiQZ8t6RNVB8m8CrP5sQV
          stance: supports
          locator: CBDB:140654
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140654）
          source: &a1
            id: s_JSiQZ8t6RNVB8m8CrP5sQV
            source_type: api_record
            title: 中国历代人物传记资料库：王同人（CBDB 140654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140654&o=json
            external_identifier: CBDB:140654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.524Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_i6mF4KTwC4K2ei3QTRXm8N
        subject_person_id: p_NCcpGv1P1CiTE2pLU2KQhf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 672年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gjsp5X1uVASQyiFhQzJVq2
          claim_id: c_i6mF4KTwC4K2ei3QTRXm8N
          source_id: s_JSiQZ8t6RNVB8m8CrP5sQV
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
        id: c_6A4B991r81HQd6hcaHQUjk
        subject_person_id: p_NCcpGv1P1CiTE2pLU2KQhf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 728年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mgjLkqb6EAFvJ4ZPbQBDdM
          claim_id: c_6A4B991r81HQd6hcaHQUjk
          source_id: s_JSiQZ8t6RNVB8m8CrP5sQV
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
        id: c_PYSggmoLKugnDcCAkyCPUQ
        subject_person_id: p_NCcpGv1P1CiTE2pLU2KQhf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同人（672年—728年），唐人物。籍贯京兆府，曾任光祿寺少卿、州刺史。（中国历代人物传记资料库 CBDB 140654）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CW_fEFtGYNKaC34-k6vZse
          claim_id: c_PYSggmoLKugnDcCAkyCPUQ
          source_id: s_JSiQZ8t6RNVB8m8CrP5sQV
          stance: supports
          locator: CBDB:140654
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DDFXQVWX-UraRlWEtsLX3a
        subject_person_id: p_cwKzjBMKcPC1s1jgGcgBVa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NCcpGv1P1CiTE2pLU2KQhf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-U15ELO8790gJc0yV_6Xb-
          claim_id: c_DDFXQVWX-UraRlWEtsLX3a
          source_id: s_nd6ttgrtn13qAwN7NSGjcu
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 292：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nd6ttgrtn13qAwN7NSGjcu
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 152190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152190&o=json
            external_identifier: CBDB:152190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cwKzjBMKcPC1s1jgGcgBVa
        status: active
        display_name: 王璿
        merged_into_person_id: null
  children:
    - claim:
        id: c_lXwpXYyij_TNBLLViWjhJz
        subject_person_id: p_NCcpGv1P1CiTE2pLU2KQhf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7VZMyBjk3p97PJ8b61JiUG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kH0l319WWVHf6CGC6bet-4
          claim_id: c_lXwpXYyij_TNBLLViWjhJz
          source_id: s_54DuReCj1gG5uoRzF2eLkf
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 292：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_54DuReCj1gG5uoRzF2eLkf
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 152189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152189&o=json
            external_identifier: CBDB:152189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7VZMyBjk3p97PJ8b61JiUG
        status: active
        display_name: 王渙
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_IFV6M5ekdtYaDRjd_P-g-F
        subject_person_id: p_BbVptP39ZfzK25qw7xJj6P
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NCcpGv1P1CiTE2pLU2KQhf
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PY5exnHES5qA0_ut8NQCss
          claim_id: c_IFV6M5ekdtYaDRjd_P-g-F
          source_id: s_BtAHtHFbCXwHgBLVoMqQaP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 292：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BtAHtHFbCXwHgBLVoMqQaP
            source_type: api_record
            title: 中国历代人物传记资料库：王德儉（CBDB 152188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152188&o=json
            external_identifier: CBDB:152188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.846Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BbVptP39ZfzK25qw7xJj6P
        status: active
        display_name: 王德儉
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王同人

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同人 | accepted |
| birth.date | 672年 | accepted |
| death.date | 728年 | accepted |
| bio.summary | 王同人（672年—728年），唐人物。籍贯京兆府，曾任光祿寺少卿、州刺史。（中国历代人物传记资料库 CBDB 140654） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cwKzjBMKcPC1s1jgGcgBVa | 王璿 | accepted |
| children | p_7VZMyBjk3p97PJ8b61JiUG | 王渙 | accepted |
| ancestors | p_BbVptP39ZfzK25qw7xJj6P | 王德儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德儉（CBDB 152188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152188&o=json)
- [中国历代人物传记资料库：王渙（CBDB 152189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152189&o=json)
- [中国历代人物传记资料库：王同人（CBDB 140654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140654&o=json)
- [中国历代人物传记资料库：王璿（CBDB 152190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152190&o=json)
