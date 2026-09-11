---
schema: wang-person/v1
id: p_5cJbXaZPVCfH9EZ6651kPP
status: active
merged_into: null
display_name: 王一鳳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FBPH9x367yViHPiqVTezq1
        subject_person_id: p_5cJbXaZPVCfH9EZ6651kPP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3fPRQrFrbgw9Jcp36m8sWa
          claim_id: c_FBPH9x367yViHPiqVTezq1
          source_id: s_tbav4zYN2TCDsypeHCvKiB
          stance: supports
          locator: CBDB:205635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205635）
          source: &a1
            id: s_tbav4zYN2TCDsypeHCvKiB
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳳（CBDB 205635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205635&o=json
            external_identifier: CBDB:205635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mxfyLtVP4yenVrcX26jrhV
        subject_person_id: p_5cJbXaZPVCfH9EZ6651kPP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1542年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9LL64L4w8ZAhP1YfbB8Vwy
          claim_id: c_mxfyLtVP4yenVrcX26jrhV
          source_id: s_tbav4zYN2TCDsypeHCvKiB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1LmMqDMDZyj9wzN4HtNcjF
        subject_person_id: p_5cJbXaZPVCfH9EZ6651kPP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一鳳（生于1542年），明人物。明清進士進士，籍贯開州，入仕進士，曾任戶部主事、知縣。（中国历代人物传记资料库 CBDB 205635）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QKsKy-wNSsMI20wi8lvS7t
          claim_id: c_1LmMqDMDZyj9wzN4HtNcjF
          source_id: s_tbav4zYN2TCDsypeHCvKiB
          stance: supports
          locator: CBDB:205635
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KN47_EdhdsszJH58Oz4Ccr
        subject_person_id: p_D3z8LjQkLgGxFGKKZZcbKs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5cJbXaZPVCfH9EZ6651kPP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RDrcJdx3jbbcWSWKLS6y4r
          claim_id: c_KN47_EdhdsszJH58Oz4Ccr
          source_id: s_tbav4zYN2TCDsypeHCvKiB
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D3z8LjQkLgGxFGKKZZcbKs
        status: active
        display_name: 王繼仁
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Ou6zof4YQAxBo_E8o5hFSD
        subject_person_id: p_5cJbXaZPVCfH9EZ6651kPP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1VgbuTJUnUYCnmk6Jh3DQG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_64Jmli2M5wxRdXVOnT0lbv
          claim_id: c_Ou6zof4YQAxBo_E8o5hFSD
          source_id: s_fnI9dfuP48jDfOzEWOPjo7
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fnI9dfuP48jDfOzEWOPjo7
            source_type: api_record
            title: 中国历代人物传记资料库：范氏(王一鳳妻)（CBDB 336284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336284&o=json
            external_identifier: CBDB:336284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1VgbuTJUnUYCnmk6Jh3DQG
        status: active
        display_name: 范氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_2Rg34TV_OsYBV27dJybaRs
        subject_person_id: p_BM6wMNHn5bHEHDoEeZirWe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5cJbXaZPVCfH9EZ6651kPP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xxLp0JHgp2-PJxhIqylXoF
          claim_id: c_2Rg34TV_OsYBV27dJybaRs
          source_id: s_tbav4zYN2TCDsypeHCvKiB
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百七十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BM6wMNHn5bHEHDoEeZirWe
        status: active
        display_name: 王恭
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王一鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一鳳 | accepted |
| birth.date | 1542年 | accepted |
| bio.summary | 王一鳳（生于1542年），明人物。明清進士進士，籍贯開州，入仕進士，曾任戶部主事、知縣。（中国历代人物传记资料库 CBDB 205635） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D3z8LjQkLgGxFGKKZZcbKs | 王繼仁 | accepted |
| spouses | p_1VgbuTJUnUYCnmk6Jh3DQG | 范氏 | accepted |
| ancestors | p_BM6wMNHn5bHEHDoEeZirWe | 王恭 | accepted |

## 外部来源

- [中国历代人物传记资料库：范氏(王一鳳妻)（CBDB 336284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336284&o=json)
- [中国历代人物传记资料库：王一鳳（CBDB 205635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205635&o=json)
