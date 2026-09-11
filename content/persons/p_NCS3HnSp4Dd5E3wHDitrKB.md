---
schema: wang-person/v1
id: p_NCS3HnSp4Dd5E3wHDitrKB
status: active
merged_into: null
display_name: 王慶祚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FqfNsPX2iFeLxecwwzAbPs
        subject_person_id: p_NCS3HnSp4Dd5E3wHDitrKB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8b2Bn25MpJi3M7iAfg6noD
          claim_id: c_FqfNsPX2iFeLxecwwzAbPs
          source_id: s_gMrqaX1LLqwKPchi3VN2M9
          stance: supports
          locator: CBDB:140050
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140050）
          source: &a1
            id: s_gMrqaX1LLqwKPchi3VN2M9
            source_type: api_record
            title: 中国历代人物传记资料库：王慶祚（CBDB 140050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140050&o=json
            external_identifier: CBDB:140050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.200Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XTx1Tt5YNKPp5hR4mz7MHE
        subject_person_id: p_NCS3HnSp4Dd5E3wHDitrKB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 635年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iDoCLBwS2cJtvWfF36De4p
          claim_id: c_XTx1Tt5YNKPp5hR4mz7MHE
          source_id: s_gMrqaX1LLqwKPchi3VN2M9
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
        id: c_9aqXK932d6vcbo4J1JTy65
        subject_person_id: p_NCS3HnSp4Dd5E3wHDitrKB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 673年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nyk1AUBug5s8J3LwCpQt7L
          claim_id: c_9aqXK932d6vcbo4J1JTy65
          source_id: s_gMrqaX1LLqwKPchi3VN2M9
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
        id: c_CAC5bPVdGy5shmrDWy9PsA
        subject_person_id: p_NCS3HnSp4Dd5E3wHDitrKB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H87mKEccE7z2Jbd5Fvz7Vp
          claim_id: c_CAC5bPVdGy5shmrDWy9PsA
          source_id: s_gMrqaX1LLqwKPchi3VN2M9
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
        id: c_k6fzCBZ6Sf4Wu1a-agCGT1
        subject_person_id: p_7aKyC49Foj81yU2JAL4fyu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NCS3HnSp4Dd5E3wHDitrKB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-MUuFc-yK05sKQdRwo74Xk
          claim_id: c_k6fzCBZ6Sf4Wu1a-agCGT1
          source_id: s_jD1DQDPJHvcnrhPP4C6vAU
          stance: supports
          locator: 唐代墓誌匯編:二卷，Shengli 17：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jD1DQDPJHvcnrhPP4C6vAU
            source_type: api_record
            title: 中国历代人物传记资料库：王子奇（CBDB 150087）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150087&o=json
            external_identifier: CBDB:150087
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7aKyC49Foj81yU2JAL4fyu
        status: active
        display_name: 王子奇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶祚 | accepted |
| birth.date | 635年 | accepted |
| death.date | 673年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7aKyC49Foj81yU2JAL4fyu | 王子奇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶祚（CBDB 140050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140050&o=json)
- [中国历代人物传记资料库：王子奇（CBDB 150087）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150087&o=json)
