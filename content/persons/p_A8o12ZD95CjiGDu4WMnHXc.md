---
schema: wang-person/v1
id: p_A8o12ZD95CjiGDu4WMnHXc
status: active
merged_into: null
display_name: 王廩
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1cpdiMXdDFB16cHCVCUyYq
        subject_person_id: p_A8o12ZD95CjiGDu4WMnHXc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AU6TGvQHEpmBGYHPzFf7gW
          claim_id: c_1cpdiMXdDFB16cHCVCUyYq
          source_id: s_AME7HjGnPMcFeyFFpbLLoQ
          stance: supports
          locator: CBDB:699343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699343）
          source: &a1
            id: s_AME7HjGnPMcFeyFFpbLLoQ
            source_type: api_record
            title: 中国历代人物传记资料库：王廩（CBDB 699343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699343&o=json
            external_identifier: CBDB:699343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KTKqHp46g6SqDMxPLJiR16
        subject_person_id: p_A8o12ZD95CjiGDu4WMnHXc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廩，宋人物。籍贯衛州，曾任三班奉職。（中国历代人物传记资料库 CBDB 699343）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TVZS_PtDWWQp4NEaXyNsFe
          claim_id: c_KTKqHp46g6SqDMxPLJiR16
          source_id: s_AME7HjGnPMcFeyFFpbLLoQ
          stance: supports
          locator: CBDB:699343
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YI-o3AZGG0h2-K6E3yut0J
        subject_person_id: p_A8o12ZD95CjiGDu4WMnHXc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tC6DjJ8Fwtj2D6kqdrmDjF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ONItRN9pz1MzeMblBR6hIs
          claim_id: c_YI-o3AZGG0h2-K6E3yut0J
          source_id: s_MVV2MwLDC1pgJjC3NxGELm
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋175 王公綬墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MVV2MwLDC1pgJjC3NxGELm
            source_type: api_record
            title: 中国历代人物传记资料库：王公綬（CBDB 699337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699337&o=json
            external_identifier: CBDB:699337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_tC6DjJ8Fwtj2D6kqdrmDjF
        status: active
        display_name: 王公綬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_JUto46eY-uEqsG5Ch8BLA3
        subject_person_id: p_A8o12ZD95CjiGDu4WMnHXc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ML8cZt68RYcGdQ69NvHGpJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f4baxWQJhGcXbZxjG5lX9b
          claim_id: c_JUto46eY-uEqsG5Ch8BLA3
          source_id: s_CKOgD_r9NZLFdQ8MCMZamy
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋174 王廩妻張氏墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CKOgD_r9NZLFdQ8MCMZamy
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王廩妻)（CBDB 699344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699344&o=json
            external_identifier: CBDB:699344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ML8cZt68RYcGdQ69NvHGpJ
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王廩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廩 | accepted |
| bio.summary | 王廩，宋人物。籍贯衛州，曾任三班奉職。（中国历代人物传记资料库 CBDB 699343） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tC6DjJ8Fwtj2D6kqdrmDjF | 王公綬 | accepted |
| spouses | p_ML8cZt68RYcGdQ69NvHGpJ | 張氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公綬（CBDB 699337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699337&o=json)
- [中国历代人物传记资料库：王廩（CBDB 699343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699343&o=json)
- [中国历代人物传记资料库：張氏(王廩妻)（CBDB 699344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699344&o=json)
